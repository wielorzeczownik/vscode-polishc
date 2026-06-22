import type { CompletionItemKind, MarkdownString } from 'vscode';

export interface CompletionEntry {
  label: string | { label: string; detail?: string; description?: string };
  kind: CompletionItemKind;
  doc?: MarkdownString;
}

export interface SignatureParameter {
  label: string;
  doc: string;
}

export interface SignatureEntry {
  label: string;
  doc: string;
  params: SignatureParameter[];
}
