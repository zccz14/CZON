---
"title": "Guia de Configuração do Site CZON"
"summary": "Este documento detalha os métodos e opções para configurar um site CZON. A configuração está localizada no campo `options.site` do arquivo `.czon/meta.json` e inclui `site.baseUrl` (usado para gerar `sitemap.xml` e `robots.txt`), `site.title` (título do site, padrão 'CZON'), `site.gaID` (ID de Medição do Google Analytics) e `site.clarityID` (ID do Projeto Microsoft Clarity). Todas as configurações são opcionais; após modificações, é necessário executar `czon build` novamente para que tenham efeito. Se `baseUrl` não for configurado, a geração do `sitemap.xml` será ignorada. As ferramentas de análise só serão carregadas se seus respectivos IDs estiverem configurados, sem afetar o desempenho da página. O documento fornece a localização da configuração, itens disponíveis, exemplo completo e considerações, ajudando os usuários a configurar o site com facilidade."
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

O CZON suporta a configuração de opções do site através do arquivo `.czon/meta.json`. Essas configurações são opcionais e não bloqueiam o uso inicial.

## Local da Configuração

Os itens de configuração estão localizados no campo `options.site` do arquivo `.czon/meta.json`:

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

ID de Medição do Google Analytics, usado para integrar as estatísticas do Google Analytics.

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

**Como obter**: Acesse o [Google Analytics](https://analytics.google.com/), crie uma propriedade e obtenha o Measurement ID na seção "Fluxos de dados".

### `site.clarityID`

ID do Projeto Microsoft Clarity, usado para integrar a análise de comportamento do usuário do Clarity.

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

**Como obter**: Acesse o [Microsoft Clarity](https://clarity.microsoft.com/), crie um projeto e obtenha o Project ID nas configurações do projeto.

### `site.home`

Configuração do caminho da página inicial, usada para personalizar o destino do redirecionamento da página inicial.

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

- **Ao acessar a página inicial raiz**: Quando um usuário acessa `/index.html`, será redirecionado automaticamente para `/{idioma detectado}/{home}` com base no idioma do navegador.
- **Ao clicar no título do Cabeçalho**: Redireciona para o caminho `home` no diretório do idioma atual.

**Cenários de Uso**:

- Deseja que os usuários acessem diretamente uma página específica na primeira visita (por exemplo, guia de introdução, apresentação do produto, etc.).
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
        { "title": "Início", "href": "index.html" },
        { "title": "Documentação", "href": "docs.html" },
        { "title": "Sobre", "href": "about.html" }
      ]
    }
  }
}
```

**Comportamento Responsivo**:

- **Dispositivos móveis**: Exibe um ícone de menu hambúrguer; ao clicar, expande todos os links de navegação.
- **Desktop**: Exibe os links de navegação diretamente no Cabeçalho, mas não ultrapassa 40% da largura da tela; itens excedentes são exibidos através de um menu suspenso "Mais".

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