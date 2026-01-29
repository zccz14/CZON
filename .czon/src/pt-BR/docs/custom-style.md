---
"title": "Guia de Estilos Personalizados do CZON"
"summary": "Este artigo detalha os métodos para personalizar estilos no projeto CZON. Ao criar um arquivo style.css no diretório .czon do projeto e escrever código CSS, é possível sobrescrever os estilos padrão ou adicionar aparência personalizada. O documento explica que o CZON detecta e copia esse arquivo para o diretório de saída durante a construção, além de adicionar um link de estilo em cada página HTML, garantindo que os estilos personalizados sejam carregados após os estilos internos para permitir a sobrescrita. O texto fornece uma lista de variáveis CSS disponíveis, incluindo cores de fundo, cores de texto, cores de link, entre outras, e apresenta vários exemplos práticos, como personalizar a cor da marca, ajustar a largura da área de conteúdo, personalizar o estilo de blocos de código e ocultar elementos específicos. Por fim, enfatiza pontos de atenção, como a necessidade do nome do arquivo ser style.css, a reconstrução obrigatória após modificações, a recomendação de usar variáveis CSS para sobrescrita e a possível necessidade de usar !important quando o CZON utiliza Tailwind CSS."
"tags":
  - "CZON"
  - "Estilos Personalizados"
  - "CSS"
  - "Desenvolvimento Frontend"
  - "Construção de Sites"
  - "Sobrescrita de Estilos"
  - "Variáveis CSS"
  - "Tailwind CSS"
---

# Estilos Personalizados

O CZON suporta a personalização dos estilos do site através do arquivo `.czon/style.css`, permitindo que você sobrescreva os estilos padrão ou adicione uma aparência personalizada.

## Como Usar

1. Crie o arquivo `style.css` no diretório `.czon` do seu projeto:

```
seu-projeto/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Crie este arquivo
├── README.md
└── docs/
```

2. Escreva seu CSS personalizado no `style.css`:

```css
/* Exemplo: alterar a cor dos links */
:root {
  --link-color: #0066cc;
}

/* Exemplo: alterar o fundo no modo escuro */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Execute novamente `czon build`. Os estilos personalizados serão aplicados automaticamente a todas as páginas.

## Como Funciona

- Durante a construção, o CZON verifica se o arquivo `.czon/style.css` existe.
- Se existir, ele é copiado para o diretório de saída `.czon/dist/style.css`.
- Em cada página HTML gerada, um link de estilo é adicionado dentro de `<head>`:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- Os estilos personalizados são carregados após os estilos internos, permitindo assim a sobrescrita dos estilos padrão.

## Variáveis CSS Disponíveis

O CZON usa variáveis CSS para definir as cores do tema. Você pode ajustar rapidamente a paleta de cores sobrescrevendo essas variáveis:

```css
:root {
  /* Cores de fundo */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Cores de texto */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Cores de link e destaque */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Cores de borda */
  --border-color: #dee2e6;
}

/* Variáveis para o modo escuro */
html.dark {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-tertiary: #404040;

  --text-primary: #e5e5e5;
  --text-secondary: #a0a0a0;
  --text-muted: #6c6c6c;

  --link-color: #58a6ff;
  --link-hover-color: #79b8ff;

  --border-color: #404040;
}
```

## Exemplos

### Personalizar a Cor da Marca

```css
:root {
  --link-color: #e91e63;
  --link-hover-color: #c2185b;
}

html.dark {
  --link-color: #f48fb1;
  --link-hover-color: #f8bbd9;
}
```

### Ajustar a Largura da Área de Conteúdo

```css
.content {
  max-width: 60rem;
}
```

### Personalizar o Estilo de Blocos de Código

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Ocultar Elementos Específicos

```css
/* Ocultar a barra lateral direita (índice) */
.sidebar-right {
  display: none;
}
```

## Pontos de Atenção

- O nome do arquivo de estilo personalizado deve ser `style.css` e deve estar localizado no diretório `.czon/`.
- Após modificar os estilos, é necessário executar novamente `czon build` para que as alterações tenham efeito.
- Recomenda-se usar a abordagem de sobrescrever variáveis CSS para personalizar estilos, pois isso garante compatibilidade com os modos claro e escuro.
- O CZON utiliza Tailwind CSS. Se for necessário sobrescrever estilos gerados pelo Tailwind, pode ser preciso usar `!important`.