import {
  MarkdownString,
  ParameterInformation,
  SignatureInformation,
} from 'vscode';

import { TYPE_MAP } from '@/constants';

export function makeMarkdown(text: string): MarkdownString {
  const markdown = new MarkdownString(text);
  markdown.isTrusted = true;
  return markdown;
}

export function polishifyTypes(text: string): string {
  return text
    .split('\n')
    .map((line) => {
      if (line.trimStart().startsWith('#define')) return line;
      let result = line;
      for (const [pattern, replacement] of TYPE_MAP) {
        result = result.replace(pattern, replacement);
      }
      return result;
    })
    .join('\n');
}

function translateDoc(
  doc: string | MarkdownString | undefined
): MarkdownString | undefined {
  if (!doc) return undefined;
  if (typeof doc === 'string') return new MarkdownString(polishifyTypes(doc));
  const markdown = new MarkdownString(polishifyTypes(doc.value));
  markdown.isTrusted = doc.isTrusted;
  return markdown;
}

export function translateHoverContent(content: MarkdownString): MarkdownString {
  const markdown = new MarkdownString(polishifyTypes(content.value));
  markdown.isTrusted = content.isTrusted;
  return markdown;
}

export function translateSignature(
  sig: SignatureInformation
): SignatureInformation {
  const out = new SignatureInformation(
    polishifyTypes(sig.label),
    translateDoc(sig.documentation)
  );
  out.parameters = sig.parameters.map((param) => {
    const label =
      typeof param.label === 'string'
        ? polishifyTypes(param.label)
        : param.label;
    return new ParameterInformation(label, translateDoc(param.documentation));
  });
  return out;
}

export function translateItem<
  T extends { detail?: string; documentation?: string | MarkdownString },
>(item: T): T {
  return {
    ...item,
    detail: item.detail ? polishifyTypes(item.detail) : item.detail,
    documentation: translateDoc(item.documentation),
  };
}
