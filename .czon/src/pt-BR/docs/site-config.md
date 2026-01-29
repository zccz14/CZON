---
"title": "Guia de Configuração do Site CZON"
"summary": "Este documento detalha os métodos e opções para configurar um site CZON. A configuração está localizada no campo `options.site` do arquivo `.czon/meta.json` e inclui `site.baseUrl` (usado para gerar `sitemap.xml` e `robots.txt`), `site.title` (título do site, padrão 'CZON'), `site.gaID` (Google Analytics Measurement ID) e `site.clarityID` (Microsoft Clarity Project ID). Todos os itens são opcionais; após modificações, é necessário executar `czon build` novamente para que tenham efeito. Se `baseUrl` não for configurado, a geração do `sitemap.xml` será ignorada. As ferramentas de análise só serão carregadas se seus respectivos IDs estiverem configurados, sem impactar o desempenho da página. O documento fornece a localização da configuração, itens disponíveis, exemplo completo e considerações, ajudando os usuários a configurar o site facilmente."
"tags":
  - "CZON"
  - "Configuração de Site"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Configuração do Site

O CZON suporta a configuração de opções do site através do arquivo `.czon/meta.json`. Essas configurações são opcionais e não bloqueiam o uso inicial.

## Localização da Configuração

Os itens de configuração estão localizados no campo `options.site` do arquivo `.czon/meta.json`:

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
        { "title": "Início", "href": "index.html" },
        { "title": "Sobre", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## Itens de Configuração Disponíveis

### `site.baseUrl`

URL base do site, usada para gerar `sitemap.xml` e `robots.txt`.

- **Tipo**: `string`
- **Formato**: URL completa, como `https://example.com`

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
- Declaração do Sitemap no `robots.txt`

### `site.title`

Título do site, exibido no cabeçalho da página.

- **Tipo**: `string`
- **Valor Padrão**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Meu Site de Documentação"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, usado para integrar estatísticas do Google Analytics.

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

Como obter: Acesse o [Google Analytics](https://analytics.google.com/), crie uma propriedade e obtenha o Measurement ID em "Fluxos de dados".

### `site.clarityID`

Microsoft Clarity Project ID, usado para integrar a análise de comportamento do usuário do Clarity.

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

Como obter: Acesse o [Microsoft Clarity](https://clarity.microsoft.com/), crie um projeto e obtenha o Project ID nas configurações do projeto.

### `site.navLinks`

Configuração de links de navegação rápida, exibidos no cabeçalho da página.

- **Tipo**: `Array<{ title: string, href: string }>`
- **Valor Padrão**: `undefined` (não exibe navegação)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Início", "href": "index.html" },
        { "title": "Documentação", "href": "docs.html" },
        { "title": "Sobre", "href": "about.html" }
      ]
    }
  }
}
```

**Comportamento Responsivo**:

- **Dispositivos Móveis**: Exibe um ícone de menu hambúrguer; ao clicar, expande todos os links de navegação.
- **Desktop**: Exibe os links de navegação diretamente no Cabeçalho, mas não ultrapassa 40% da largura da tela; links excedentes são exibidos em um menu suspenso "Mais".

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
        { "title": "Início", "href": "index.html" },
        { "title": "Documentação", "href": "docs.html" },
        { "title": "Blog", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Considerações

- Após modificar a configuração, é necessário executar `czon build` novamente para que as alterações tenham efeito.
- Todos os itens de configuração `site` são opcionais; você pode configurar apenas as partes necessárias.
- As ferramentas de análise (GA, Clarity) só serão carregadas se seus respectivos IDs estiverem configurados, sem afetar o desempenho da página.
- Se `baseUrl` não for configurado, a geração do `sitemap.xml` será ignorada.