---
"title": "Guia de Configuração do Site CZON"
"summary": "Este documento detalha os métodos e opções para configurar um site CZON. A configuração está localizada no campo `options.site` do ficheiro `.czon/meta.json` e inclui `site.baseUrl` (usado para gerar `sitemap.xml` e `robots.txt`), `site.title` (título do site, valor padrão 'CZON'), `site.gaID` (ID de Medição do Google Analytics) e `site.clarityID` (ID do Projeto Microsoft Clarity). Todos os itens de configuração são opcionais; após modificações, é necessário executar novamente `czon build` para que tenham efeito. Se `baseUrl` não for configurado, a geração do `sitemap.xml` será ignorada. As ferramentas de análise só serão carregadas após a configuração do respetivo ID, não afetando o desempenho da página. O documento fornece a localização da configuração, itens disponíveis, exemplos completos e considerações importantes para ajudar os utilizadores a configurar o site facilmente."
"tags":
  - "CZON"
  - "Configuração do Site"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Configuração do Site

O CZON suporta a configuração de opções do site através do ficheiro `.czon/meta.json`. Estas configurações são opcionais e não bloqueiam o uso inicial.

## Localização da Configuração

Os itens de configuração estão localizados no campo `options.site` do ficheiro `.czon/meta.json`:

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
      "home": "guide.html",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "Página Inicial", "href": "index.html" },
        { "title": "Sobre", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## Itens de Configuração Disponíveis

### `site.baseUrl`

URL base do site, utilizado para gerar `sitemap.xml` e `robots.txt`.

- **Tipo**: `string`
- **Formato**: URL completo, por exemplo `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Após configurado, será gerado automaticamente:

- `sitemap.xml` - Mapa do site contendo todas as páginas
- Declaração Sitemap no `robots.txt`

### `site.title`

Título do site, exibido no cabeçalho da página.

- **Tipo**: `string`
- **Valor Padrão**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "O Meu Site de Documentação"
    }
  }
}
```

### `site.gaID`

ID de Medição do Google Analytics, utilizado para integrar estatísticas do Google Analytics.

- **Tipo**: `string`
- **Formato**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

**Como obter**: Aceda ao [Google Analytics](https://analytics.google.com/), crie uma propriedade e obtenha o Measurement ID na secção "Fluxos de Dados".

### `site.clarityID`

ID do Projeto Microsoft Clarity, utilizado para integrar a análise de comportamento do utilizador do Clarity.

- **Tipo**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

**Como obter**: Aceda ao [Microsoft Clarity](https://clarity.microsoft.com/), crie um projeto e obtenha o Project ID nas definições do projeto.

### `site.home`

Configuração do caminho da página inicial, utilizada para personalizar o destino do redirecionamento da página inicial.

- **Tipo**: `string`
- **Valor Padrão**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**Comportamento**:

- **Ao aceder à página inicial raiz**: Quando um utilizador acede a `/index.html`, será automaticamente redirecionado para `/{idioma detetado}/{home}` com base no idioma do navegador.
- **Ao clicar no título do Cabeçalho**: Redireciona para o caminho `home` no diretório do idioma atual.

**Cenários de Utilização**:

- Deseja que os utilizadores acedam diretamente a uma página específica na primeira visita (por exemplo, guia de introdução, apresentação do produto, etc.).
- A página inicial do site não é uma lista de artigos, mas sim uma página de documentação específica.

### `site.navLinks`

Configuração de links de navegação rápida, exibindo links de navegação no cabeçalho da página.

- **Tipo**: `Array<{ title: string, href: string }>`
- **Valor Padrão**: `undefined` (não exibe navegação)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Página Inicial", "href": "index.html" },
        { "title": "Documentação", "href": "docs.html" },
        { "title": "Sobre", "href": "about.html" }
      ]
    }
  }
}
```

**Comportamento Responsivo**:

- **Dispositivos Móveis**: Exibe um ícone de menu hambúrguer; ao clicar, expande todos os links de navegação.
- **Desktop**: Exibe os links de navegação diretamente no Cabeçalho, mas não excede 40% da largura do ecrã; os itens que excedam são apresentados num menu suspenso "Mais".

## Exemplo Completo

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Blog Técnico",
      "home": "getting-started.html",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "Página Inicial", "href": "index.html" },
        { "title": "Documentação", "href": "docs.html" },
        { "title": "Blog", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Considerações Importantes

- Após modificar a configuração, é necessário executar novamente `czon build` para que as alterações tenham efeito.
- Todos os itens de configuração `site` são opcionais; pode configurar apenas as partes necessárias.
- As ferramentas de análise (GA, Clarity) só serão carregadas após a configuração do respetivo ID, não afetando o desempenho da página.
- Se `baseUrl` não for configurado, a geração do `sitemap.xml` será ignorada.