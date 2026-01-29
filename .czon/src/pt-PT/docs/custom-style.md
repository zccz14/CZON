---
"title": "Guia de Estilos Personalizados do CZON"
"summary": "Este artigo detalha os métodos para personalizar estilos no projeto CZON. Ao criar um ficheiro style.css no diretório .czony do projeto e escrever código CSS, é possível substituir os estilos padrão ou adicionar uma aparência personalizada. O documento explica que o CZON deteta e copia este ficheiro para o diretório de saída durante a construção, e adiciona uma ligação de estilo em cada página HTML, garantindo que os estilos personalizados são carregados após os estilos incorporados para permitir a substituição. O artigo fornece uma lista de variáveis CSS disponíveis, incluindo cores de fundo, cores de texto, cores de ligação, entre outras, e apresenta vários exemplos práticos, como personalizar a cor da marca, ajustar a largura da área de conteúdo, personalizar o estilo dos blocos de código e ocultar elementos específicos. Por fim, são destacadas considerações importantes, como a necessidade do nome do ficheiro ser style.css, a reconstrução obrigatória após alterações, a recomendação de usar variáveis CSS para substituições e a possível necessidade de usar !important quando o CZON utiliza Tailwind CSS."
"tags":
  - "CZON"
  - "Estilos Personalizados"
  - "CSS"
  - "Desenvolvimento Frontend"
  - "Construção de Sites"
  - "Substituição de Estilos"
  - "Variáveis CSS"
  - "Tailwind CSS"
---

# Estilos Personalizados

O CZON suporta a personalização dos estilos do site através do ficheiro `.czon/style.css`, permitindo-lhe substituir os estilos padrão ou adicionar uma aparência personalizada.

## Como Utilizar

1. Crie o ficheiro `style.css` no diretório `.czon` do seu projeto:

```
seu-projeto/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Crie este ficheiro
├── README.md
└── docs/
```

2. Escreva o seu CSS personalizado no `style.css`:

```css
/* Exemplo: Alterar a cor das ligações */
:root {
  --link-color: #0066cc;
}

/* Exemplo: Alterar o fundo no modo escuro */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Execute novamente `czon build`. Os estilos personalizados serão aplicados automaticamente a todas as páginas.

## Como Funciona

- Durante a construção, o CZON verifica se o ficheiro `.czon/style.css` existe.
- Se existir, copia-o para o diretório de saída `.czon/dist/style.css`.
- Em cada página HTML gerada, é adicionada uma ligação de estilo dentro de `<head>`:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- Os estilos personalizados são carregados após os estilos incorporados, permitindo assim a substituição dos estilos padrão.

## Variáveis CSS Disponíveis

O CZON utiliza variáveis CSS para definir as cores do tema. Pode ajustar rapidamente a paleta de cores substituindo estas variáveis:

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

  /* Cores de ligação e ênfase */
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

### Personalizar o Estilo dos Blocos de Código

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

## Considerações Importantes

- O nome do ficheiro de estilos personalizados deve ser `style.css` e deve estar localizado no diretório `.czon/`.
- Após modificar os estilos, é necessário executar novamente `czon build` para que as alterações tenham efeito.
- Recomenda-se a utilização da substituição de variáveis CSS para personalizar estilos, pois isso garante compatibilidade com os modos claro e escuro.
- O CZON utiliza Tailwind CSS. Se for necessário substituir estilos gerados pelo Tailwind, poderá ser preciso usar `!important`.