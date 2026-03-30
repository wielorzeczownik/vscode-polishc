import { CompletionItemKind } from 'vscode';

import { makeMarkdown } from '@/type-translator';
import type { CompletionEntry, SignatureEntry } from '@/types';

const Kind = CompletionItemKind;

export const items: CompletionEntry[] = [
  // kontrola przepływu
  {
    label: { label: 'jezeli', detail: '(warunek)', description: 'if' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe jezeli\nodpowiednik: if\n\n**Składnia:**\n\n`jezeli (warunek) { /* ... */ }`'
    ),
  },
  {
    label: { label: 'jeżeli', detail: '(warunek)', description: 'if' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe jeżeli\nodpowiednik: if\n\n**Składnia:**\n\n`jeżeli (warunek) { /* ... */ }`'
    ),
  },
  {
    label: { label: 'jesli', detail: '(warunek)', description: 'if' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe jesli\nodpowiednik: if\n\n**Składnia:**\n\n`jesli (warunek) { /* ... */ }`'
    ),
  },
  {
    label: { label: 'jeśli', detail: '(warunek)', description: 'if' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe jeśli\nodpowiednik: if\n\n**Składnia:**\n\n`jeśli (warunek) { /* ... */ }`'
    ),
  },
  {
    label: { label: 'albo', description: 'else' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe albo\nodpowiednik: else\n\n**Składnia:**\n\n`albo { /* ... */ }`'
    ),
  },
  {
    label: { label: 'dopoki', detail: '(warunek)', description: 'while' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe dopoki\nodpowiednik: while\n\n**Składnia:**\n\n`dopoki (warunek) { /* ... */ }`'
    ),
  },
  {
    label: { label: 'dopóki', detail: '(warunek)', description: 'while' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe dopóki\nodpowiednik: while\n\n**Składnia:**\n\n`dopóki (warunek) { /* ... */ }`'
    ),
  },
  {
    label: {
      label: 'dla',
      detail: '(init; warunek; krok)',
      description: 'for',
    },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe dla\nodpowiednik: for\n\n**Składnia:**\n\n`dla (calkowita i = 0; i < n; i++) { /* ... */ }`'
    ),
  },
  {
    label: { label: 'rob', detail: '{ } dopoki(warunek)', description: 'do' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe rob\nodpowiednik: do...while\n\n**Składnia:**\n\n`rob { /* ... */ } dopoki (warunek);`'
    ),
  },
  {
    label: { label: 'rób', detail: '{ } dopóki(warunek)', description: 'do' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe rób\nodpowiednik: do...while\n\n**Składnia:**\n\n`rób { /* ... */ } dopóki (warunek);`'
    ),
  },
  {
    label: { label: 'przerwij', description: 'break' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe przerwij\nodpowiednik: break\n\n`przerwij;`'
    ),
  },
  {
    label: { label: 'kontynuuj', description: 'continue' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe kontynuuj\nodpowiednik: continue\n\n`kontynuuj;`'
    ),
  },

  // return
  {
    label: { label: 'kurwa', detail: ' wartość', description: 'return' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe kurwa\nodpowiednik: return\n\n`kurwa wartość;`'
    ),
  },
  {
    label: { label: 'nara', detail: ' wartość', description: 'return' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe nara\nodpowiednik: return\n\n`nara wartość;`'
    ),
  },
  {
    label: { label: 'zegnam', detail: ' wartość', description: 'return' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe zegnam\nodpowiednik: return\n\n`zegnam wartość;`'
    ),
  },
  {
    label: { label: 'żegnam', detail: ' wartość', description: 'return' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe żegnam\nodpowiednik: return\n\n`żegnam wartość;`'
    ),
  },
  {
    label: { label: 'dawaj', detail: ' wartość', description: 'return' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe dawaj\nodpowiednik: return\n\n`dawaj wartość;`'
    ),
  },
  {
    label: { label: 'itojestjakbyok', description: 'return 0' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe itojestjakbyok\nodpowiednik: return 0\n\n`itojestjakbyok;`'
    ),
  },

  // typy
  {
    label: { label: 'calkowita', description: 'int' },
    kind: Kind.Class,
    doc: makeMarkdown(
      'typ calkowita\nodpowiednik: int\n\n`calkowita liczba = 0;`'
    ),
  },
  {
    label: { label: 'całkowita', description: 'int' },
    kind: Kind.Class,
    doc: makeMarkdown(
      'typ całkowita\nodpowiednik: int\n\n`całkowita liczba = 0;`'
    ),
  },
  {
    label: { label: 'zmiennoprzecinkowa', description: 'float' },
    kind: Kind.Class,
    doc: makeMarkdown(
      'typ zmiennoprzecinkowa\nodpowiednik: float\n\n`zmiennoprzecinkowa x = 3.14;`'
    ),
  },
  {
    label: { label: 'zmiennoprzecinkowaalewiększa', description: 'double' },
    kind: Kind.Class,
    doc: makeMarkdown(
      'typ zmiennoprzecinkowaalewiększa\nodpowiednik: double\n\n`zmiennoprzecinkowaalewiększa x = 3.14159;`'
    ),
  },
  {
    label: { label: 'znak', description: 'char' },
    kind: Kind.Class,
    doc: makeMarkdown("typ znak\nodpowiednik: char\n\n`znak litera = 'a';`"),
  },
  {
    label: { label: 'nic', description: 'void' },
    kind: Kind.Class,
    doc: makeMarkdown('typ nic\nodpowiednik: void\n\n`nic mojafunkcja() { }`'),
  },
  {
    label: { label: 'dluga', description: 'long' },
    kind: Kind.Class,
    doc: makeMarkdown(
      'typ dluga\nodpowiednik: long\n\n`dluga liczba = 1234567890;`'
    ),
  },
  {
    label: { label: 'długa', description: 'long' },
    kind: Kind.Class,
    doc: makeMarkdown(
      'typ długa\nodpowiednik: long\n\n`długa liczba = 1234567890;`'
    ),
  },
  {
    label: { label: 'prawdaczyfalsz', description: 'bool' },
    kind: Kind.Class,
    doc: makeMarkdown(
      'typ prawdaczyfalsz\nodpowiednik: bool\ndostarczona przez `<stdbool.h>`\n\n`prawdaczyfalsz flaga = cieplo;`'
    ),
  },
  {
    label: { label: 'prawdaczyfałsz', description: 'bool' },
    kind: Kind.Class,
    doc: makeMarkdown(
      'typ prawdaczyfałsz\nodpowiednik: bool\ndostarczona przez `<stdbool.h>`\n\n`prawdaczyfałsz flaga = ciepło;`'
    ),
  },

  // struktury
  {
    label: { label: 'struktura', description: 'struct' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe struktura\nodpowiednik: struct\n\n`struktura Punkt { calkowita x; calkowita y; };`'
    ),
  },
  {
    label: { label: 'ototypu', description: 'typedef' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe ototypu\nodpowiednik: typedef\n\n`ototypu calkowita Liczba;`'
    ),
  },
  {
    label: { label: 'jednosc', description: 'union' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe jednosc\nodpowiednik: union\n\n`jednosc Data { calkowita liczba; zmiennoprzecinkowa zmpl; };`'
    ),
  },
  {
    label: { label: 'jedność', description: 'union' },
    kind: Kind.Keyword,
    doc: makeMarkdown(
      'słowo kluczowe jedność\nodpowiednik: union\n\n`jedność Data { calkowita liczba; zmiennoprzecinkowa zmpl; };`'
    ),
  },

  // stałe
  {
    label: { label: 'cieplo', description: '0' },
    kind: Kind.Constant,
    doc: makeMarkdown('stała cieplo\nwartość: 0 (true)\n\n`kurwa cieplo;`'),
  },
  {
    label: { label: 'ciepło', description: '0' },
    kind: Kind.Constant,
    doc: makeMarkdown('stała ciepło\nwartość: 0 (true)\n\n`kurwa ciepło;`'),
  },
  {
    label: { label: 'ozieble', description: '1' },
    kind: Kind.Constant,
    doc: makeMarkdown('stała ozieble\nwartość: 1 (false)\n\n`kurwa ozieble;`'),
  },
  {
    label: { label: 'ozięble', description: '1' },
    kind: Kind.Constant,
    doc: makeMarkdown('stała ozięble\nwartość: 1 (false)\n\n`kurwa ozięble;`'),
  },
  {
    label: { label: 'smieciie', description: '1' },
    kind: Kind.Constant,
    doc: makeMarkdown('stała smieciie\nwartość: 1\n\n`kurwa smieciie;`'),
  },
  {
    label: { label: 'śmiecie', description: '1' },
    kind: Kind.Constant,
    doc: makeMarkdown('stała śmiecie\nwartość: 1\n\n`kurwa śmiecie;`'),
  },

  // funkcje i/o
  {
    label: { label: 'wypisz', detail: '(format, ...)', description: 'printf' },
    kind: Kind.Function,
    doc: makeMarkdown(
      'funkcja wypisz\ndostarczona przez `<stdio.h>`\n\n `calkowita`\n\n**Parametry:**\n\n`const znak *restrict`\n\n`calkowita wypisz(const znak *restrict, ...)`'
    ),
  },
  {
    label: {
      label: 'swypisz',
      detail: '(bufor, format, ...)',
      description: 'sprintf',
    },
    kind: Kind.Function,
    doc: makeMarkdown(
      'funkcja swypisz\ndostarczona przez `<stdio.h>`\n\n `calkowita`\n\n**Parametry:**\n\n`znak *restrict`\n`const znak *restrict`\n\n`calkowita swypisz(znak *restrict, const znak *restrict, ...)`'
    ),
  },
  {
    label: { label: 'czytaj', detail: '(format, ...)', description: 'scanf' },
    kind: Kind.Function,
    doc: makeMarkdown(
      'funkcja czytaj\ndostarczona przez `<stdio.h>`\n\n `calkowita`\n\n**Parametry:**\n\n`const znak *restrict`\n\n`calkowita czytaj(const znak *restrict, ...)`'
    ),
  },

  // entry point
  {
    label: { label: 'noelo', detail: ' {}', description: 'main' },
    kind: Kind.Function,
    doc: makeMarkdown(
      'funkcja noelo\npunkt wejścia programu\n\n `calkowita`\n\n`noelo`'
    ),
  },
];

export const signatures: Record<string, SignatureEntry> = {
  wypisz: {
    label: 'wypisz(const znak *format, ...)',
    doc: 'Wypisuje sformatowany tekst na ekran *(printf)*',
    params: [
      {
        label: 'const znak *format',
        doc: 'Ciąg formatujący: `%d` całkowita, `%f` float, `%s` string, `%c` znak',
      },
      {
        label: '...',
        doc: 'Wartości do wstawienia w miejsca specyfikatorów formatu',
      },
    ],
  },
  swypisz: {
    label: 'swypisz(znak *bufor, const znak *format, ...)',
    doc: 'Zapisuje sformatowany tekst do bufora *(sprintf)*',
    params: [
      {
        label: 'znak *bufor',
        doc: 'Tablica `znak[]` - miejsce docelowe zapisu',
      },
      {
        label: 'const znak *format',
        doc: 'Ciąg formatujący: `%d`, `%f`, `%s`, `%c`',
      },
      { label: '...', doc: 'Wartości do wstawienia' },
    ],
  },
  czytaj: {
    label: 'czytaj(const znak *format, ...)',
    doc: 'Wczytuje dane od użytkownika *(scanf)*',
    params: [
      {
        label: 'const znak *format',
        doc: 'Ciąg formatujący: `%d`, `%f`, `%s`, `%c`',
      },
      { label: '...', doc: 'Wskaźniki do zmiennych (`&zmienna`)' },
    ],
  },
};
