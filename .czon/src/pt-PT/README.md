---
"title": "CZON - Motor de Conteúdo Markdown AI-Nativo"
"summary": "CZON é um motor de conteúdo Markdown AI-Nativo, concebido para ajudar criadores de conteúdo a simplificar o seu fluxo de trabalho de escrita. Enfatiza a escrita com configuração zero, integrando profundamente tecnologia de IA para processar automaticamente tarefas como geração de títulos, extração de resumos, classificação por etiquetas, tradução multilingue e navegação do site, reduzindo a interrupção do utilizador. O CZON possui funcionalidade de geração de sites estáticos integrada, mas foca-se principalmente na criação e gestão de conteúdo, em vez de na personalização complexa de temas. É adequado para utilizadores que desejam escrever na sua língua materna e gerar automaticamente versões multilingues, especialmente para criadores de conteúdo de sites que detestam configurações complexas."
"tags":
  - "CZON"
  - "AI-Nativo"
  - "Markdown"
  - "Motor de Conteúdo"
  - "Tradução Multilingue"
  - "Geração de Sites Estáticos"
  - "Configuração Zero"
  - "Criação de Conteúdo"
---

![Logótipo do CZON](logo.png)

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 Ver Website do CZON 🚀
    </a>
</div>

# CZON - Motor de Conteúdo Markdown AI-Nativo

- **C**: **C**onteúdo orientado | O conteúdo é rei, foco no conteúdo
- **Z**: **Z**ero Configuração | Escrita com configuração zero, menos interrupções
- **O**: **O**rganicamente AI-Nativo | AI-Nativo orgânico, integração profunda de IA
- **N**: Curva de Energia em Forma de **N** | Curva de energia em forma de N, intervém em todas as fases de criação-distribuição-feedback

Na era da IA, enquanto criadores de conteúdo para websites, podemos ter um motor de criação de conteúdo mais inteligente.

**Regresso ao conteúdo: Minimizar interrupções, focar na escrita**

Devolver a essência aos documentos, devolver a serenidade à escrita.

Primeiro, não quero ser um bibliotecário. Às vezes quero escrever algum conteúdo, mas posso ainda não ter pensado no seu título, ou não ter formado uma organização específica. Desejo que um LLM me ajude automaticamente a gerar títulos, criar resumos, classificar, navegar e outras tarefas de organização.

Segundo, o meu escritório tem de estar arrumado. Não quero ferramentas de construção com configurações complexas, não gosto de configurar documentos complicados, não aprecio estruturas complexas. Cada vez que vejo os ficheiros de configuração e a estrutura de projeto de ferramentas como Docusaurus, VuePress, Astro, fico com dor de cabeça. Agora, o CZON opta por esconder toda a configuração no diretório `.czon`, varrendo-a para um canto, para que o utilizador se concentre apenas em escrever o conteúdo, deixando o resto para o CZON tratar. Todos os outros diretórios são o seu espaço de escrita, pode organizar os seus ficheiros Markdown como desejar.

**Regresso à língua materna: Escrever na língua materna, construir versões multilingues de forma fluida**

A vida é curta, não tenho paciência para traduzir. É quando usamos a nossa língua materna que conseguimos explorar ao máximo a profundidade do nosso pensamento. Mas, ao mesmo tempo, manter a ligação com o mundo é necessário, não quero desistir da comunicação multilingue. Por isso, desejo uma ferramenta que me permita escrever na minha língua materna e, simultaneamente, permita que mais pessoas vejam o meu conteúdo. Atualmente, o i18n não só exige que traduzamos nós próprios, como também que mantenhamos as atualizações de conteúdo, o que é demasiado trabalhoso. Escolho usar um LLM para me ajudar com a tradução, poupando-me muito tempo e permitindo completar a tradução para vários idiomas com um clique.

## ✨ Funcionalidades Principais

1. 🌍 **Tradução Multilingue por IA**: Usa IA para tradução incremental, permitindo que os utilizadores escrevam Markdown na sua língua materna, mas os utilizadores podem ser multilingues.
2. 📊 **Extração de Metadados por IA**: Extrai automaticamente título, descrição, resumo, palavras-chave, público-alvo, URL amigável (slug), etc.
3. 🏷️ **Classificação por Etiquetas por IA**: Usa IA para extrair e gerir etiquetas e categorias do conteúdo.
4. 🧭 **Navegação por Categorias por IA**: Usa IA para gerar mapas do site e navegação, a localização dos ficheiros fonte não é relevante.
5. 🤖 **Resumo de Todo o Site por IA**: Pode gerar um resumo de todo o site em vários estilos.

E algumas funcionalidades não relacionadas com IA:

1. ⚙️ **Configuração Zero**: Toda a configuração e cache estão escondidos no diretório `.czon`, mantendo a estrutura do projeto limpa.
2. 🔄 **Construção Incremental**: Deteta alterações com base no hash do conteúdo, processando apenas os ficheiros modificados.
3. 📚 **Suporte a Extensões Markdown**: Suporte nativo para fórmulas matemáticas KaTeX, diagramas Mermaid, carrosséis Embla, notas de rodapé, etc.
4. 🚀 **Geração de Sites Estáticos**: SSG baseado em React integrado, gera sites estáticos multilingues.
5. 🌐 **Encaminhamento Automático Baseado no Idioma do Visitante**: Encaminha automaticamente para a versão linguística correspondente com base no idioma do visitante.

## 📦 Início Rápido

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (recomenda-se a versão LTS 24, ou versão 18 ou superior, necessita do comando `npx`)
- Obtenha uma [Chave de API da OpenAI](https://platform.openai.com/account/api-keys), ou uma Chave de API compatível com OPENAI
- Git instalado (para listar ficheiros Markdown a partir de um Git, ignorando ficheiros filtrados pelas regras .gitignore)

### Configuração de Variáveis de Ambiente

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Obrigatório: Substitua pela sua Chave de API da OpenAI
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Opcional, usa a API oficial da OpenAI por padrão
export OPENAI_MODEL="gpt-3.5-turbo"  # Opcional, usa o modelo gpt-3.5-turbo por padrão
export OPENAI_MAX_TOKENS="4096"  # Opcional, define o limite máximo de tokens (se ignorado, usa o valor padrão do modelo; para tradução de textos longos, recomenda-se definir um valor mais alto, por exemplo 8192, dependendo do número máximo de tokens suportado pelo modelo utilizado)

# Se precisar de usar um proxy HTTP para aceder à API da OpenAI, pode definir as seguintes variáveis
export HTTPS_PROXY="http://seu-proxy.com:8080"  # Opcional, define um proxy HTTPS
export HTTP_PROXY="http://seu-proxy.com:8080"   # Opcional, define um proxy HTTP
```

### Construir um Site Multilingue

Execute numa pasta gerida por Git:

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Como os códigos de idioma serão posteriormente usados em muitas funcionalidades da geração do site estático, certifique-se de usar códigos de idioma padrão BCP 47. Por exemplo, `zh-Hans` representa Chinês Simplificado, `en-US` representa Inglês Americano. Pode adicionar mais idiomas conforme necessário, por exemplo `es-ES` (Espanhol), `ja-JP` (Japonês), `ko-KR` (Coreano), etc.
Para uma lista de códigos de idioma padrão, consulte [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).

Diretório de saída: `.czon/dist`, posteriormente será necessário implementar o conteúdo deste diretório numa plataforma de alojamento de sites estáticos.

Para utilização detalhada, execute `npx czon@latest --help`.

## 🔗 Comparação com Outras Ferramentas

| Característica          | CZON                     | Docusaurus      | VuePress        | Astro           |
| ----------------------- | ------------------------ | --------------- | --------------- | --------------- |
| **AI-Nativo**           | ✅ Integração Profunda   | ❌              | ❌              | ❌              |
| **Configuração Zero**   | ✅ Configuração Escondida| ❌ Precisa de ficheiro de configuração | ❌ Precisa de ficheiro de configuração | ❌ Precisa de ficheiro de configuração |
| **Tradução Multilingue por IA** | ✅ Tradução Incremental Automática | ❌ Tradução Manual | ❌ Tradução Manual | ❌ Tradução Manual |
| **Classificação/Etiquetas Automática** | ✅ Extração por IA | ❌ Configuração Manual | ❌ Configuração Manual | ❌ Configuração Manual |
| **Extensões Markdown**  | ✅ KaTeX, Mermaid, Embla | ✅ Via plugins  | ✅ Via plugins  | ✅ Via plugins  |
| **Personalização de Temas** | ❌ Limitada       | ✅ Rica         | ✅ Rica         | ✅ Rica         |

O CZON posiciona-se como um **motor de conteúdo potenciado por IA**, e não como um SSG com todas as funcionalidades. Foca-se em melhorar a eficiência da criação de conteúdo através da IA, sendo adequado para criadores que valorizam a qualidade do conteúdo e desejam reduzir a carga de configuração. Na verdade, o CZON pode ser usado em conjunto com ferramentas SSG como Docusaurus, VuePress, Astro, funcionando como um motor frontal para geração e gestão de conteúdo.

## 📞 Suporte

- Página do Projeto: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- GitHub Issues: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord para Discussão: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_Devolver a serenidade à escrita, deixar o conteúdo crescer naturalmente._