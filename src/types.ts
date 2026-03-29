import type { CompletionItemKind, MarkdownString } from 'vscode';

export interface CompletionEntry {
  label: { label: string; detail?: string; description?: string } | string;
  kind: CompletionItemKind;
  doc?: MarkdownString;
}

export interface SignatureParam {
  label: string;
  doc: string;
}

export interface SignatureEntry {
  label: string;
  doc: string;
  params: SignatureParam[];
}
