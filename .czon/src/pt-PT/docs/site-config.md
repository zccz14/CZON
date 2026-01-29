---
"title": "Guia de Configuração do Site CZON"
"summary": "Este documento detalha os métodos e opções para configurar um site CZON. A configuração está localizada no campo `options.site` do ficheiro `.czon/meta.json` e inclui `site.baseUrl` (usado para gerar `sitemap.xml` e `robots.txt`), `site.title` (título do site, valor padrão 'CZON'), `site.gaID` (Google Analytics Measurement ID) e `site.clarityID` (Microsoft Clarity Project ID). Todas as opções são opcionais; após alterações, é necessário executar novamente `czon build` para que tenham efeito. Se `baseUrl` não for configurado, a geração do `sitemap.xml` será ignorada. As ferramentas de análise só são carregadas após configuração do respetivo ID, não afetando o desempenho da página. O documento fornece a localização da configuração, opções disponíveis, exemplos completos e considerações importantes para ajudar os utilizadores a configurar facilmente o seu site."
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

As opções de configuração estão localizadas no campo `options.site` do ficheiro `.czon/meta.json`:

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
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

## Opções de Configuração Disponíveis

### `site.baseUrl`

URL base do site, utilizado para gerar `sitemap.xml` e `robots.txt`.

- **Tipo**: `string`
- **Formato**: URL completa, por exemplo `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Após configuração, serão gerados automaticamente:

- `sitemap.xml` - mapa do site contendo todas as páginas
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

Google Analytics Measurement ID, utilizado para integrar estatísticas do Google Analytics.

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

Microsoft Clarity Project ID, utilizado para integrar análise de comportamento do utilizador do Clarity.

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

### `site.navLinks`

Configuração de ligações de navegação rápida, exibidas no cabeçalho da página.

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

- **Dispositivos Móveis**: Exibe um ícone de menu hambúrguer; ao clicar, expande todas as ligações de navegação.
- **Desktop**: Exibe as ligações de navegação diretamente no Cabeçalho, mas não excede 40% da largura do ecrã; ligações que excedam são apresentadas num menu suspenso "Mais".

## Exemplo Completo

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Blog Técnico",
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
- Todas as opções de configuração `site` são opcionais; pode configurar apenas as partes necessárias.
- As ferramentas de análise (GA, Clarity) só são carregadas após configuração do respetivo ID, não afetando o desempenho da página.
- Se `baseUrl` não for configurado, a geração do `sitemap.xml` será ignorada.