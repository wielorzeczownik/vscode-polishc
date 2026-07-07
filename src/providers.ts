import {
  CompletionItem,
  Hover,
  languages,
  ParameterInformation,
  SignatureHelp,
  SignatureInformation,
} from 'vscode';

import { items, signatures } from '@/completion-data';
import { LANGUAGE_ID } from '@/constants';
import { makeMarkdown } from '@/type-translator';

export function registerCompletionProvider() {
  return languages.registerCompletionItemProvider(LANGUAGE_ID, {
    provideCompletionItems() {
      return items.map((item) => {
        const completionItem = new CompletionItem(item.label, item.kind);
        completionItem.documentation = item.doc;
        return completionItem;
      });
    },
  });
}

export function registerHoverProvider() {
  return languages.registerHoverProvider(LANGUAGE_ID, {
    provideHover(document, position) {
      // identyfikatory z polskimi literami
      const range = document.getWordRangeAtPosition(
        position,
        /[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ_][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9_]*/
      );
      if (!range) return;

      const word = document.getText(range);
      const item = items.find((entry) => {
        const entryLabel = entry.label;
        const label =
          typeof entryLabel === 'string' ? entryLabel : entryLabel.label;
        return label === word;
      });
      if (!item?.doc) return;

      return new Hover(item.doc, range);
    },
  });
}

export function registerSignatureProvider() {
  return languages.registerSignatureHelpProvider(
    LANGUAGE_ID,
    {
      provideSignatureHelp(document, position) {
        const lineText = document.lineAt(position).text;
        const textBefore = lineText.slice(0, position.character);

        const parenIndex = textBefore.lastIndexOf('(');
        if (parenIndex === -1) return;

        // ręcznie cofamy się po znakach od nawiasu
        const beforeParen = textBefore.slice(0, parenIndex).trimEnd();
        let start = beforeParen.length - 1;
        while (start >= 0 && /\w/.test(beforeParen[start])) start--;
        const functionName = beforeParen.slice(start + 1);
        const sig = signatures[functionName];
        if (!sig) return;

        const argumentsText = textBefore.slice(parenIndex + 1);
        const activeParameter = argumentsText.split(',').length - 1;

        const signature = new SignatureInformation(
          sig.label,
          makeMarkdown(sig.doc)
        );
        signature.parameters = sig.params.map(
          (parameter) =>
            new ParameterInformation(
              parameter.label,
              makeMarkdown(parameter.doc)
            )
        );

        const help = new SignatureHelp();
        help.signatures = [signature];
        help.activeSignature = 0;
        // clampujemy
        help.activeParameter = Math.min(activeParameter, sig.params.length - 1);
        return help;
      },
    },
    '(',
    ','
  );
}
