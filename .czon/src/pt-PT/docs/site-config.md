---
"title": "Guia de Configuração do Site CZON"
"summary": "Este documento detalha os métodos e opções para configurar um site CZON. A configuração está localizada no campo `options.site` do ficheiro `.czon/meta.json` e inclui `site.baseUrl` (usado para gerar `sitemap.xml` e `robots.txt`), `site.title` (título do site, valor padrão 'CZON'), `site.gaID` (ID de Medição do Google Analytics) e `site.clarityID` (ID do Projeto Microsoft Clarity). Todos os itens de configuração são opcionais; após modificações, é necessário executar novamente `czon build` para que tenham efeito. Se `baseUrl` não estiver configurado, a geração do `sitemap.xml` será ignorada. As ferramentas de análise só serão carregadas após a configuração dos respetivos IDs, não afetando o desempenho da página. O documento fornece a localização da configuração, itens de configuração disponíveis, um exemplo completo e considerações importantes, ajudando os utilizadores a configurar o site facilmente."
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
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id"
    }
  },
  "files": []
}
```

## Itens de Configuração Disponíveis

### `site.baseUrl`

URL base do site, usado para gerar `sitemap.xml` e `robots.txt`.

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

ID de Medição do Google Analytics, usado para integrar estatísticas do Google Analytics.

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

Como obter: Aceda ao [Google Analytics](https://analytics.google.com/), crie um recurso e obtenha o Measurement ID em "Fluxos de Dados".

### `site.clarityID`

ID do Projeto Microsoft Clarity, usado para integrar a análise de comportamento do utilizador do Clarity.

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

Como obter: Aceda ao [Microsoft Clarity](https://clarity.microsoft.com/), crie um projeto e obtenha o Project ID nas definições do projeto.

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
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## Considerações Importantes

- Após modificar a configuração, é necessário executar novamente `czon build` para que as alterações tenham efeito.
- Todos os itens de configuração `site` são opcionais; pode configurar apenas as partes necessárias.
- As ferramentas de análise (GA, Clarity) só serão carregadas após a configuração dos respetivos IDs, não afetando o desempenho da página.
- Se `baseUrl` não estiver configurado, a geração do `sitemap.xml` será ignorada.