import type { Disposable, ExtensionContext } from 'vscode';
import { window, workspace } from 'vscode';
import type { LanguageClient } from 'vscode-languageclient/node';

import { startClangd } from '@/clangd';
import { areHeadersMissing, ensurePolishCHeaders } from '@/headers';
import {
  registerCompletionProvider,
  registerHoverProvider,
  registerSignatureProvider,
} from '@/providers';

let clangdClient: LanguageClient | undefined;

export async function activate(context: ExtensionContext): Promise<void> {
  const providers: Disposable[] = [
    registerCompletionProvider(),
    registerHoverProvider(),
    registerSignatureProvider(),
  ];
  context.subscriptions.push(...providers);

  let headersPath: string | undefined;
  const projectPath = workspace.workspaceFolders?.[0]?.uri.fsPath;
  if (projectPath) {
    try {
      if (areHeadersMissing(projectPath)) {
        const answer = await window.showInformationMessage(
          'Polish C: Czy pobrać nagłówki (.h) do projektu? Wymagane do podpowiedzi typów.',
          'Tak',
          'Nie'
        );
        if (answer === 'Tak') {
          headersPath = await ensurePolishCHeaders(projectPath);
        }
      } else {
        headersPath = projectPath;
      }
    } catch {
      // clangd odpali się bez nagłówków
    }
  }

  clangdClient = startClangd(context, headersPath);
}

export async function deactivate(): Promise<void> {
  // sprzątamy po sobie
  await clangdClient?.stop();
}
