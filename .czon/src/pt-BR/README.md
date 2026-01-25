---
"title": "CZON - Motor de Conteúdo Markdown Nativamente em IA"
"summary": "CZON é um motor de conteúdo Markdown nativamente em IA, projetado para ajudar criadores de conteúdo a simplificar seu fluxo de escrita. Ele enfatiza a escrita com configuração zero, integrando profundamente a tecnologia de IA para processar automaticamente tarefas como geração de títulos, extração de resumos, classificação por tags, tradução multilíngue e navegação do site, reduzindo a interferência do usuário. O CZON possui funcionalidade de geração de site estático integrada, mas foca principalmente na criação e gestão de conteúdo, não em personalizações complexas de temas. É adequado para usuários que desejam escrever em sua língua materna e gerar automaticamente versões multilíngues, especialmente para criadores de conteúdo de sites que odeiam configurações complexas."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "Motor de Conteúdo"
  - "Tradução Multilíngue"
  - "Geração de Site Estático"
  - "Configuração Zero"
  - "Criação de Conteúdo"
---

![Logo do CZON](logo.png)

# CZON - Motor de Conteúdo Markdown Nativamente em IA

- **C**: **C**ontent oriented | Conteúdo é rei, foco no conteúdo
- **Z**: **Z**ero Configuration | Escrita com configuração zero, menos interrupções
- **O**: **O**rganic AI-Native | Nativamente em IA de forma orgânica, integração profunda de IA
- **N**: **N**-shaped Energy Curve | Curva de energia em forma de N, envolvendo criação-distribuição-feedback em todas as etapas

[> Demonstração do Site](https://czon.zccz14.com/)

Na era da IA, como criadores de conteúdo para sites, podemos ter um motor de criação de conteúdo mais inteligente.

**Retorno ao conteúdo: Minimizar interrupções, focar na escrita**

Deixe os documentos retornarem à sua essência, deixe a escrita retornar à tranquilidade.

Primeiro, não quero ser um bibliotecário. Às vezes quero anotar algum conteúdo, mas talvez ainda não tenha pensado em seu título, ainda não tenha uma organização específica. Espero que um LLM me ajude automaticamente a gerar títulos, fazer resumos, classificar, navegar e outras tarefas de organização.

Segundo, meu escritório deve estar limpo. Não quero ferramentas de construção com configurações complexas, mexer em configurações complicadas de documentos, não gosto de estruturas complexas. Toda vez que vejo os arquivos de configuração e a estrutura de projetos de ferramentas como Docusaurus, VuePress, Astro, fico com dor de cabeça. Agora, o CZON opta por esconder todas as configurações no diretório `.czon`, varrendo-as para um canto, para que o usuário precise apenas focar no conteúdo da escrita, deixando o resto para o CZON lidar. Todos os outros diretórios são seu espaço de escrita, você pode organizar seus arquivos Markdown como quiser.

**Retorno à língua materna: Escreva em sua língua materna, construa versões multilíngues de forma suave**

A vida é curta, não tenho paciência para traduzir. As pessoas só conseguem expressar a profundidade de seu pensamento ao usar sua língua materna. Mas, ao mesmo tempo, manter-se conectado com o mundo é necessário, não quero abrir mão da comunicação multilíngue. Portanto, desejo uma ferramenta que me permita escrever em minha língua materna e, ao mesmo tempo, permita que mais pessoas vejam meu conteúdo. Atualmente, o i18n exige que você mesmo traduza e ainda mantenha as atualizações de conteúdo, é muito trabalhoso. Escolho usar um LLM para me ajudar com a tradução, economizando muito tempo e podendo concluir traduções para vários idiomas com um clique.

## Funcionalidades Básicas

1. 🌍 **Tradução Multilíngue Automática**: Usa IA para tradução incremental, permitindo que o usuário escreva Markdown em sua língua materna, mas o usuário pode ser multilíngue.
2. 💭 **Extração Automática de Resumo**: Usa IA para análise e extração de conteúdo do texto original.
3. 🏷️ **Classificação Automática por Tags**: Usa IA para extração e gestão de tags e categorias do conteúdo.
4. 🧭 **Navegação Inteligente por Categorias**: Usa IA para gerar mapa do site e navegação, a localização dos arquivos fonte não é relevante.

## Geração de Site Estático (SSG)

O CZON possui um esquema SSG integrado que pode transformar qualquer pasta git contendo Markdown em um site HTML estático.

⚠️ Por favor, note: O CZON **não** é um gerador de sites estáticos (SSG) profissional, mas sim um motor de conteúdo Markdown movido por IA, focado na criação e gestão de conteúdo.

✅ O CZON visa simplificar o fluxo de criação e publicação de conteúdo, permitindo que os usuários se concentrem na escrita em si, sem serem incomodados por configurações e ferramentas complexas.

❌ O CZON não oferecerá personalizações complexas de temas ou ecossistema de plugins, focando-se em melhorar a qualidade e acessibilidade do conteúdo por meio da IA.

🔔 No entanto, o CZON ainda pode gerar sites estáticos. Se necessário, o CZON pode ser usado como um pré-processador, integrado a outras soluções SSG para gerar sites personalizados e bonitos.

## Início Rápido

Pré-requisitos:

- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada, necessário comando `npx`)
- [Chave de API da OpenAI](https://platform.openai.com/account/api-keys) obtida, ou uma chave de API compatível com OpenAI
- Git instalado (para listar arquivos Markdown a partir de um repositório Git, ignorando arquivos filtrados pelas regras do .gitignore)

Primeiro, trabalhe em uma pasta já gerenciada pelo Git:

Configure as variáveis de ambiente

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Obrigatório: Substitua pela sua Chave de API da OpenAI
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Opcional, usa a API oficial da OpenAI por padrão
export OPENAI_MODEL="gpt-3.5-turbo"  # Opcional, usa o modelo gpt-3.5-turbo por padrão
export OPENAI_MAX_TOKENS="4096"  # Opcional, define o limite máximo de tokens (se ignorado, usa o valor padrão do modelo; para traduções de textos longos, recomenda-se definir um valor maior, como 8192, dependendo do número máximo de tokens suportado pelo modelo usado)
```

Construa o site, com suporte a tradução multilíngue. Use o diretório atual como diretório de origem, a saída será no diretório `.czon/dist`.

- Você pode especificar as versões de idioma a serem geradas usando o parâmetro `--lang` várias vezes (por exemplo, `--lang zh-Hans --lang en-US`).
- Não é necessário configurar o idioma de origem, o CZON detectará automaticamente.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Veja mais parâmetros ou ajuda**:

```bash
npx czon@latest
```