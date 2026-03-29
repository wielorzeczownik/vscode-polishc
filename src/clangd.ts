import { execFileSync } from 'node:child_process';

import {
  CompletionList,
  type ExtensionContext,
  type MarkdownString,
  SignatureHelp,
  window,
  workspace,
} from 'vscode';
import { LanguageClient, type ServerOptions } from 'vscode-languageclient/node';

import { items } from '@/completion-data';
import {
  CLANGD_CANDIDATES,
  CLANGD_CLIENT_ID,
  CLANGD_CLIENT_NAME,
  CLANGD_FILE_WATCHER,
  LANGUAGE_ID,
} from '@/constants';
import {
  translateHoverContent,
  translateItem,
  translateSignature,
} from '@/type-translator';

function findClangd(): string | undefined {
  for (const cmd of CLANGD_CANDIDATES) {
    try {
      execFileSync(cmd, ['--version'], { stdio: 'ignore' });
      return cmd;
    } catch {
      // nie znaleziono, próbuj następny
    }
  }
}

function createClangdClient(
  clangdPath: string,
  headersPath: string | undefined
): LanguageClient {
  const serverOptions: ServerOptions = {
    command: clangdPath,
    // indeksuje projekt w tle
    args: ['--background-index', '--clang-tidy'],
  };

  return new LanguageClient(
    CLANGD_CLIENT_ID,
    CLANGD_CLIENT_NAME,
    serverOptions,
    {
      documentSelector: [{ scheme: 'file', language: LANGUAGE_ID }],
      initializationOptions: headersPath
        ? { fallbackFlags: [`-I${headersPath}`] }
        : undefined,
      synchronize: {
        fileEvents: workspace.createFileSystemWatcher(CLANGD_FILE_WATCHER),
      },
      middleware: {
        async provideHover(document, position, token, next) {
          const range = document.getWordRangeAtPosition(
            position,
            /[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ_][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9_]*/
          );
          const word = range ? document.getText(range) : undefined;
          const isPolishKeyword = items.some(
            (entry) =>
              (typeof entry.label === 'string'
                ? entry.label
                : entry.label.label) === word
          );
          // clangd nie zna polskich słów kluczowych
          if (isPolishKeyword) return;

          const hover = await next(document, position, token);
          if (!hover) return hover;
          hover.contents = (hover.contents as MarkdownString[]).map((content) =>
            translateHoverContent(content)
          );
          return hover;
        },
        async provideSignatureHelp(document, position, context, token, next) {
          const help = await next(document, position, context, token);
          if (!help) return help;
          const out = new SignatureHelp();
          out.signatures = help.signatures.map((sig) =>
            translateSignature(sig)
          );
          out.activeSignature = help.activeSignature;
          out.activeParameter = help.activeParameter;
          return out;
        },
        async provideCompletionItem(document, position, context, token, next) {
          const result = await next(document, position, context, token);
          if (!result) return result;
          if (Array.isArray(result))
            return result.map((item) => translateItem(item));
          return new CompletionList(
            result.items.map((item) => translateItem(item)),
            result.isIncomplete
          );
        },
        async resolveCompletionItem(item, token, next) {
          const resolved = await next(item, token);
          if (!resolved) return resolved;
          return translateItem(resolved);
        },
      },
    }
  );
}

export function startClangd(
  context: ExtensionContext,
  headersPath: string | undefined
): LanguageClient | undefined {
  const clangdPath = findClangd();
  if (!clangdPath) {
    void window.showWarningMessage('Polish C: nie znaleziono clangd');
    return;
  }

  const client = createClangdClient(clangdPath, headersPath);
  void client.start();
  context.subscriptions.push(client);
  return client;
}
