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
        result = result.replace(pattern, () => replacement);
      }
      return result;
    })
    .join('\n');
}

function translateDocument(
  document: string | MarkdownString | undefined
): MarkdownString | undefined {
  if (!document) return undefined;
  if (typeof document === 'string')
    return new MarkdownString(polishifyTypes(document));
  const markdown = new MarkdownString(polishifyTypes(document.value));
  markdown.isTrusted = document.isTrusted;
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
    translateDocument(sig.documentation)
  );
  out.parameters = sig.parameters.map((parameter) => {
    const label =
      typeof parameter.label === 'string'
        ? polishifyTypes(parameter.label)
        : parameter.label;
    return new ParameterInformation(
      label,
      translateDocument(parameter.documentation)
    );
  });
  return out;
}

export function translateItem<
  T extends { detail?: string; documentation?: string | MarkdownString },
>(item: T): T {
  return {
    ...item,
    detail: item.detail ? polishifyTypes(item.detail) : item.detail,
    documentation: translateDocument(item.documentation),
  };
}
