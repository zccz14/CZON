---
"title": "Przewodnik wdrażania statycznej strony CZON na GitHub Pages"
"summary": "Ten artykuł szczegółowo opisuje, jak wdrożyć wielojęzyczną statyczną stronę wygenerowaną przez CZON na GitHub Pages za pomocą GitHub CLI. Najpierw należy zainstalować i zalogować się do GitHub CLI, upewniając się, że masz uprawnienia do repozytorium. Następnie uruchom polecenie `npx czon@latest config github`, które przeprowadzi użytkownika przez serię kroków, w tym sprawdzenie uprawnień, inicjalizację repozytorium Git, konfigurację repozytorium zdalnego, włączenie GitHub Pages i ustawienie typu na workflow, utworzenie lub zaktualizowanie pliku Workflow, zatwierdzenie i wypchnięcie zmian, a na końcu uzyskanie adresu URL Pages. Cały proces jest zautomatyzowany, co upraszcza procedurę wdrażania."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "strona statyczna"
  - "przewodnik wdrażania"
  - "GitHub CLI"
  - "wielojęzyczny"
  - "automatyczne wdrażanie"
---

# Wdrażanie na GitHub Pages

Ten przewodnik opisuje, jak wdrożyć wielojęzyczną statyczną stronę wygenerowaną przez CZON na GitHub Pages za pomocą GitHub CLI.

Najpierw zainstaluj narzędzie [GitHub CLI](https://cli.github.com/) (jeśli nie jest jeszcze zainstalowane) i upewnij się, że jesteś zalogowany (jeśli jeszcze nie jesteś):

```bash
$ gh --version # Sprawdź wersję, aby upewnić się, że instalacja się powiodła
```

Upewnij się, że jesteś zalogowany i masz uprawnienia `repo` do docelowego repozytorium:

```bash
$ gh auth login -s repo # Zaloguj się do konta GitHub, zostaniesz poproszony o zalogowanie przez przeglądarkę lub użycie tokena
$ gh auth status # Sprawdź status logowania, upewnij się, że logowanie się powiodło i masz uprawnienia repo do docelowego repozytorium
```

Reszta to tylko uruchomienie poniższego polecenia i postępowanie zgodnie z instrukcjami:

```bash
$ npx czon@latest config github
```

To polecenie przeprowadzi Cię przez następujące kroki:

1.  Sprawdzenie, czy uprawnienia `gh` obejmują `repo`; jeśli nie, wyświetli monit o ponowne zalogowanie i dodanie uprawnień `repo`.
2.  Jeśli katalog lokalny nie jest repozytorium Git, wyświetli monit o zainicjowanie nowego repozytorium Git.
3.  Sprawdzenie ustawień zdalnego repozytorium Git w katalogu lokalnym, wyszukanie zdalnego repozytorium GitHub. Jeśli nie ma zdalnego repozytorium GitHub, wyświetli monit o utworzenie nowego repozytorium zdalnego i dodanie go jako `origin`. Jeśli `origin` już istnieje, ale nie jest repozytorium GitHub, wyświetli monit o dodanie nowego zdalnego repozytorium GitHub jako `upstream`.
4.  Sprawdzenie, czy GitHub Pages jest włączone i czy jest typu `workflow`. Jeśli nie, włączenie go i poprawienie za pomocą API `gh api`, aby wdrażanie odbywało się z Actions. Równocześnie ustawienie CNAME (jeśli masz niestandardową domenę).
5.  Sprawdzenie pliku GitHub Workflow. Jeśli nie został utworzony, utworzenie pliku Workflow dla Pages; jeśli już istnieje, ale nie jest najnowszej wersji, wyświetlenie monitu o aktualizację pliku Workflow.
6.  Zatwierdzenie pliku Workflow i wypchnięcie zmian do repozytorium zdalnego.
7.  Wyświetlenie adresu URL strony GitHub Pages, uzyskanie najnowszego adresu URL Pages za pomocą `gh api`.