# Contributing to vscode-polishc

Dziękujemy za rozważenie kontrybucji. Ten dokument zawiera wszystko, czego potrzebujesz, żeby zacząć.

## Przegląd

Rozszerzenie VS Code dodające podświetlanie składni, snippety i wsparcie LSP dla języka Polish C.

## Struktura projektu

```text
.
├── src/                     kod źródłowy rozszerzenia (TypeScript)
├── syntaxes/                gramatyka TextMate do podświetlania składni
├── snippets/                snippety kodu
└── scripts/
    └── bump-version.sh      wyznacza kolejną wersję release i bumpuje package.json
```

## Konfiguracja środowiska

```bash
git clone https://github.com/wielorzeczownik/vscode-polishc.git
cd vscode-polishc
npm install
```

## Uruchamianie sprawdzeń lokalnie

### Z narzędziami zainstalowanymi lokalnie

```bash
# TypeScript
npm run format:check
npm run lint
npm run typecheck
npm run compile
npm audit

# Shell
shfmt --diff scripts/

# Markdown
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
| `feat:`     | Nowa funkcja lub zachowanie         |
| `fix:`      | Naprawa błędu                       |
| `test:`     | Dodawanie lub aktualizacja testów   |
| `chore:`    | Utrzymanie, aktualizacje zależności |
| `refactor:` | Zmiana kodu bez zmiany zachowania   |
| `docs:`     | Tylko dokumentacja                  |
| `ci:`       | Zmiany CI/CD                        |

Breaking changes muszą zawierać `BREAKING CHANGE:` w stopce commita.

Trzymaj commity skupione na jednej rzeczy. Jeśli zmiana dotyczy zarówno logiki, jak i testów, jeden commit wystarczy.

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
