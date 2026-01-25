---
"title": "CZON - Motor de Conteúdo Markdown AI-Nativo"
"summary": "CZON é um motor de conteúdo Markdown AI-Nativo, concebido para ajudar criadores de conteúdo a simplificar o fluxo de escrita. Enfatiza a escrita com configuração zero, integrando profundamente tecnologia de IA para processar automaticamente tarefas como geração de títulos, extração de resumos, classificação por etiquetas, tradução multilingue e navegação do site, reduzindo a interrupção do utilizador. O CZON possui funcionalidade de geração de site estático integrada, mas foca-se principalmente na criação e gestão de conteúdo, em vez de personalização complexa de temas. É adequado para utilizadores que desejam escrever na sua língua materna e gerar automaticamente versões multilingues, especialmente para criadores de conteúdo de sites que detestam configurações complexas."
"tags":
  - "CZON"
  - "AI-Nativo"
  - "Markdown"
  - "Motor de Conteúdo"
  - "Tradução Multilingue"
  - "Geração de Site Estático"
  - "Configuração Zero"
  - "Criação de Conteúdo"
---

![Logótipo do CZON](logo.png)

# CZON - Motor de Conteúdo Markdown AI-Nativo

- **C**: **C**ontent oriented | Conteúdo é rei, foco no conteúdo
- **Z**: **Z**ero Configuration | Escrita com configuração zero, menos interrupções
- **O**: **O**rganic AI-Native | AI-Nativo orgânico, integração profunda de IA
- **N**: **N**-shaped Energy Curve | Curva de energia em forma de N, intervém em todas as fases de criação-distribuição-feedback

[> Demonstração do Website](https://czon.zccz14.com/)

Na era da IA, enquanto criadores de conteúdo para websites, podemos ter um motor de criação de conteúdo mais inteligente.

**Regresso ao conteúdo: Minimizar interrupções, focar na escrita**

Devolver a essência aos documentos, devolver a tranquilidade à escrita.

Primeiro, não quero ser um bibliotecário. Às vezes quero escrever algum conteúdo, mas talvez ainda não tenha pensado no seu título, ainda não tenha uma organização específica. Espero que o LLM me ajude automaticamente a gerar títulos, fazer resumos, classificar, navegar e outras tarefas de organização.

Segundo, o meu escritório tem de estar arrumado. Não quero ferramentas de construção com configurações complexas, mexer em configurações de documentos complicadas, não gosto de estruturas complexas. Cada vez que vejo os ficheiros de configuração e estruturas de projeto de ferramentas como Docusaurus, VuePress, Astro, fico com dor de cabeça. Agora, o CZON opta por esconder todas as configurações no diretório .czon, varrendo-as para um canto, para que o utilizador só precise de se concentrar em escrever o conteúdo, deixando o resto para o CZON tratar. Todos os outros diretórios são o seu espaço de escrita, pode organizar os seus ficheiros Markdown como desejar.

**Regresso à língua materna: Escrever na língua materna, construir versões multilingues de forma fluida**

A vida é curta, não tenho paciência para traduzir. É quando se usa a língua materna que se consegue explorar melhor a profundidade do próprio pensamento. Mas, ao mesmo tempo, manter-se conectado com o mundo é necessário, não quero desistir da comunicação multilingue. Por isso, desejo uma ferramenta que me permita escrever na minha língua materna e, ao mesmo tempo, permita que mais pessoas vejam o meu conteúdo. Atualmente, o i18n não só exige que se faça a tradução, como também que se mantenha a atualização do conteúdo, é muito trabalhoso. Escolho usar o LLM para me ajudar com a tradução, poupando-me muito tempo e podendo completar a tradução para vários idiomas com um clique.

## Funcionalidades Básicas

1. 🌍 **Tradução Multilingue Automática**: Usa IA para tradução incremental, permitindo que o utilizador escreva Markdown na língua materna, mas o utilizador pode ser multilingue.
2. 💭 **Extração Automática de Resumo**: Usa IA para analisar e extrair conteúdo do texto original.
3. 🏷️ **Classificação Automática por Etiquetas**: Usa IA para extrair e gerir etiquetas e categorias do conteúdo.
4. 🧭 **Navegação Inteligente por Categorias**: Usa IA para gerar mapas do site e navegação, a localização dos ficheiros de origem não é relevante.

## Geração de Site Estático (SSG)

O CZON possui uma solução SSG integrada, que pode transformar qualquer pasta git contendo Markdown num site HTML estático.

⚠️ Por favor, note que o CZON não é um gerador de sites estáticos (SSG) profissional, mas sim um motor de conteúdo Markdown impulsionado por IA, focado na criação e gestão de conteúdo.

✅ O CZON visa simplificar o fluxo de criação e publicação de conteúdo, permitindo que os utilizadores se concentrem na escrita em si, em vez de serem incomodados por configurações e ferramentas complexas.

❌ O CZON não fornecerá personalização complexa de temas ou ecossistema de plugins, focando-se em melhorar a qualidade e acessibilidade do conteúdo através da IA.

🔔 No entanto, o CZON ainda pode gerar sites estáticos. Se necessário, pode usar o CZON como um pré-processador, integrando-o com outras soluções SSG para gerar sites personalizados e visualmente atrativos.

## Início Rápido

Pré-requisitos:

- Ter o [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada, necessário comando npx)
- Ter obtido uma [Chave de API da OpenAI](https://platform.openai.com/account/api-keys), ou uma Chave de API compatível com OpenAI
- Ter o Git instalado (para listar ficheiros Markdown a partir de um Git, ignorando ficheiros filtrados pelas regras .gitignore)

Primeiro, trabalhe numa pasta já gerida pelo git:

Configure as variáveis de ambiente

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Obrigatório: Substitua pela sua Chave de API da OpenAI
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Opcional, usa a API oficial da OpenAI por padrão
export OPENAI_MODEL="gpt-3.5-turbo"  # Opcional, usa o modelo gpt-3.5-turbo por padrão
export OPENAI_MAX_TOKENS="4096"  # Opcional, define o limite máximo de tokens (se ignorado, usa o valor padrão do modelo; para tradução de textos longos, recomenda-se definir um valor mais alto, por exemplo, 8192, dependendo do número máximo de tokens suportado pelo modelo utilizado)
```

Construa o site, suportando tradução multilingue. Use o diretório atual como diretório de origem, a saída será para o diretório `.czon/dist`.

- Pode especificar as versões de idioma a gerar usando o parâmetro `--lang` várias vezes (por exemplo, `--lang zh-Hans --lang en-US`).
- Não é necessário configurar o idioma de origem, o CZON deteta automaticamente.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Ver mais parâmetros ou ajuda**:

```bash
npx czon@latest
```