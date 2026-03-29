<h1 align="center">Polish C - rozszerzenie VS Code</h1>

<p align="center">
  <a href="https://github.com/wielorzeczownik/vscode-polishc/actions/workflows/release.yml"><picture><source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/actions/workflow/status/wielorzeczownik/vscode-polishc/release.yml?style=flat-square&labelColor=2d333b&color=3fb950"/><source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/github/actions/workflow/status/wielorzeczownik/vscode-polishc/release.yml?style=flat-square&color=2ea043"/><img src="https://img.shields.io/github/actions/workflow/status/wielorzeczownik/vscode-polishc/release.yml?style=flat-square&labelColor=2d333b&color=3fb950" alt="Build"/></picture></a> <a href="https://github.com/wielorzeczownik/vscode-polishc/releases/latest"><picture><source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/v/release/wielorzeczownik/vscode-polishc?style=flat-square&labelColor=2d333b&color=3fb950"/><source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/github/v/release/wielorzeczownik/vscode-polishc?style=flat-square&color=2ea043"/><img src="https://img.shields.io/github/v/release/wielorzeczownik/vscode-polishc?style=flat-square&labelColor=2d333b&color=3fb950" alt="Najnowsze wydanie"/></picture></a> <a href="https://github.com/wielorzeczownik/vscode-polishc/blob/main/LICENSE"><picture><source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Licencja-MIT-3fb950?style=flat-square&labelColor=2d333b"/><source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/badge/Licencja-MIT-2ea043?style=flat-square"/><img src="https://img.shields.io/badge/Licencja-MIT-3fb950?style=flat-square&labelColor=2d333b" alt="Licencja: MIT"/></picture></a>
  <br/>
  <img src="https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white" alt="VS Code"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black" alt="C"/>
</p>

<p align="center">
  Rozszerzenie VS Code dla Polish C dialektu języka C z polskimi słowami kluczowymi.<br/>
  Podświetlanie składni, autouzupełnianie, dokumentacja inline, podpowiedzi parametrów i integracja z clangd.
</p>

> **Uwaga:** Ten projekt jest ciekawostką - powstał dla zabawy i raczej nie będzie aktywnie rozwijany. Działa, robi co ma robić, zależności są aktualizowane automatycznie przez Renovate. PR-y mile widziane, ale bez gwarancji szybkiej reakcji.

---

## Czym jest Polish C?

Polish C to wariant języka C, w którym angielskie słowa kluczowe zastąpiono polskimi odpowiednikami. Zamiast pisać `int`, `while`, `if` czy `printf`, piszesz `calkowita`, `dopoki`, `jezeli` i `wypisz`. To rozszerzenie zapewnia pełne wsparcie IDE dla Polish C w Visual Studio Code.

Dialekt stworzony przez [npc-tom](https://github.com/npc-tom/polishc).

---

## Funkcje

- **Podświetlanie składni** - polskie słowa kluczowe, typy, operatory i literały poprawnie kolorowane
- **Autouzupełnianie** - podpowiedzi dla wszystkich słów kluczowych, typów i funkcji standardowych z opisami
- **Dokumentacja inline** - opis każdego słowa kluczowego, typu i funkcji wyświetlany po najechaniu kursorem
- **Podpowiedzi parametrów** - wskazówki przy wywołaniu `wypisz`, `czytaj`, `swypisz` i innych funkcji
- **Sprawdzanie typów przez clangd** - pełne wsparcie LSP z nazwami typów C przetłumaczonymi na polski

---

## Instalacja

1. Przejdź do [**Wydań**](https://github.com/wielorzeczownik/vscode-polishc/releases/latest)
2. Pobierz `polishc.vsix`
3. W VS Code: **Rozszerzenia** (`Ctrl+Shift+X`) → `···` → **Zainstaluj z VSIX...**

Lub przez terminal:

```bash
code --install-extension polishc.vsix
```

---

## Słowa kluczowe

### Kontrola przepływu

| Polish C | C |
|---|---|
| `jezeli` / `jeżeli` / `jesli` / `jeśli` | `if` |
| `albo` | `else` |
| `dopoki` / `dopóki` | `while` |
| `dla` | `for` |
| `rob` / `rób` | `do` |
| `przerwij` | `break` |
| `kontynuuj` | `continue` |
| `kurwa` / `nara` / `dawaj` | `return` |

### Typy

| Polish C | C |
|---|---|
| `calkowita` / `całkowita` | `int` |
| `znak` | `char` |
| `zmiennoprzecinkowa` | `float` |
| `zmiennoprzecinkowaalewiększa` | `double` |
| `dluga` / `długa` | `long` |
| `nic` | `void` |
| `prawdaczyfalsz` | `bool` |

### Funkcje standardowe

| Polish C | C |
|---|---|
| `wypisz(format, ...)` | `printf` |
| `czytaj(format, ...)` | `scanf` |
| `swypisz(bufor, format, ...)` | `sprintf` |
| `noelo()` | `main` |

---

## Sprawdzanie typów (opcjonalne)

Aby korzystać ze sprawdzania typów i pełnego wsparcia LSP, zainstaluj [clangd](https://clangd.llvm.org/installation):

```bash
# macOS
brew install llvm

# Ubuntu / Debian
sudo apt install clangd
```

Rozszerzenie wykrywa clangd automatycznie. Bez niego podświetlanie składni i autouzupełnianie nadal działają.

---

## Budowanie ze źródeł

Wymagania: [Node.js](https://nodejs.org) 24+, [clangd](https://clangd.llvm.org/installation) (opcjonalnie).

```bash
git clone https://github.com/wielorzeczownik/vscode-polishc.git
cd polishc
npm install
npm run compile
```

Aby spakować jako `.vsix`:

```bash
npm run compile
npx @vscode/vsce package
```
