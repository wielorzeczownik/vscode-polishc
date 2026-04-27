# Contributing to vscode-polishc

Ten projekt jest ciekawostką i nie jest aktywnie rozwijany - PR-y są mile widziane, ale bez gwarancji szybkiej odpowiedzi.

## Wymagania

- [Node.js](https://nodejs.org/) 24+
- [shfmt](https://github.com/mvdan/sh)
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)
- [clangd](https://clangd.llvm.org/installation) (opcjonalnie, do testowania integracji LSP)

## Konfiguracja środowiska

```bash
git clone https://github.com/wielorzeczownik/vscode-polishc.git
cd vscode-polishc
npm install
```

## Struktura projektu

- `src/` – kod źródłowy rozszerzenia (TypeScript)
- `syntaxes/` – gramatyka TextMate do podświetlania składni
- `snippets/` – snippety kodu
- `scripts/bump-version.sh` – wyznacza kolejną wersję release na podstawie git-cliff i bumpuje `package.json`

## Przed wysłaniem PR

Upewnij się, że te komendy przechodzą lokalnie.

### Z narzędziami zainstalowanymi lokalnie

```bash
npm run format:check
npm run lint
npm run typecheck
npm run compile
npm audit
shfmt --diff scripts/
markdownlint-cli2 "**/*.md"
```

### Z Dockerem (bez lokalnych instalacji)

```bash
docker run --rm -v "$(pwd):/src" -w /src mvdan/shfmt --diff scripts/

docker run --rm -v "$(pwd):/workdir" davidanson/markdownlint-cli2 "**/*.md" '!node_modules/**'
```

## Styl commitów

Projekt używa [Conventional Commits](https://www.conventionalcommits.org/). Wiadomości commitów sterują automatycznym bumperem wersji.

| Prefix      | Kiedy używać                        |
| ----------- | ----------------------------------- |
| `feat:`     | Nowa funkcja                        |
| `fix:`      | Naprawa błędu                       |
| `chore:`    | Utrzymanie, aktualizacje zależności |
| `refactor:` | Zmiana kodu bez zmiany zachowania   |
| `docs:`     | Tylko dokumentacja                  |
| `style:`    | Formatowanie, bez zmian logiki      |
| `ci:`       | Zmiany CI/CD                        |

Breaking changes muszą zawierać `BREAKING CHANGE:` w stopce commita.

## Pull requesty

- PR powinien dotyczyć jednej sprawy.
- Odnoś się do powiązanego issue w opisie PR.
- Workflow CI musi przejść.

## Zgłaszanie błędów

Otwórz [issue](https://github.com/wielorzeczownik/vscode-polishc/issues) i dołącz:

- Co zrobiłeś
- Czego się spodziewałeś
- Co się faktycznie stało
- Wersję VS Code i systemu operacyjnego

> W przypadku problemów bezpieczeństwa przeczytaj najpierw [SECURITY.md](SECURITY.md).

## Licencja

Wnosząc zmiany zgadzasz się, że będą one objęte licencją [WTFPL](LICENSE).
