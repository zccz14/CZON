---
"title": "CZON - Motor de Conteúdo Markdown AI-Nativo"
"summary": "CZON é um motor de conteúdo Markdown AI-Nativo projetado para ajudar criadores de conteúdo a simplificar seu fluxo de trabalho de escrita. Ele enfatiza a escrita com configuração zero, integrando profundamente tecnologia de IA para processar automaticamente tarefas como geração de títulos, extração de resumos, classificação por tags, tradução multilíngue e navegação do site, reduzindo a interrupção do usuário. O CZON possui funcionalidade de geração de site estático integrada, mas foca principalmente na criação e gestão de conteúdo, não em personalização complexa de temas. É adequado para usuários que desejam escrever em sua língua materna e gerar automaticamente versões multilíngues, especialmente para criadores de conteúdo de sites que odeiam configurações complexas."
"tags":
  - "CZON"
  - "AI-Nativo"
  - "Markdown"
  - "Motor de Conteúdo"
  - "Tradução Multilíngue"
  - "Geração de Site Estático"
  - "Configuração Zero"
  - "Criação de Conteúdo"
---

![Logo do CZON](logo.png)

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 Ver Site do CZON 🚀
    </a>
</div>

# CZON - Motor de Conteúdo Markdown AI-Nativo

- **C**: **C**onteúdo orientado | Conteúdo é rei, foco no conteúdo
- **Z**: **Z**ero Configuração | Escrita com configuração zero, menos interrupções
- **O**: **O**rgânico AI-Nativo | AI-Nativo orgânico, integração profunda de IA
- **N**: Curva de Energia em Forma de **N** | Curva de energia em forma de N, envolvendo todos os estágios de criação-distribuição-feedback

Na era da IA, nós, criadores de conteúdo para sites, podemos ter um motor de criação de conteúdo mais inteligente.

**Retorno ao conteúdo: Minimizar interrupções, focar na escrita**

Deixe os documentos retornarem à sua essência, deixe a escrita retornar à tranquilidade.

Primeiro, não quero ser um bibliotecário. Às vezes quero escrever algo, mas talvez ainda não tenha pensado em um título, ou não tenha uma organização específica. Quero que um LLM gere automaticamente títulos, resumos, classificação, navegação e outras tarefas de organização para mim.

Segundo, meu escritório deve estar limpo. Não quero ferramentas de construção complexas para configurar, mexer em configurações complicadas de documentos, não gosto de estruturas complexas. Toda vez que vejo os arquivos de configuração e estruturas de projeto de ferramentas como Docusaurus, VuePress, Astro, fico com dor de cabeça. Agora, o CZON opta por esconder todas as configurações no diretório `.czon`, varrendo-as para um canto. O usuário só precisa focar em escrever o conteúdo, o resto o CZON cuida. Todos os outros diretórios são seu espaço de escrita, você pode organizar seus arquivos Markdown como quiser.

**Retorno à língua materna: Escreva em sua língua materna, construa versões multilíngues suavemente**

A vida é curta, sou preguiçoso para traduzir. As pessoas atingem sua máxima profundidade de pensamento quando usam sua língua materna. Mas manter-se conectado com o mundo também é necessário, não quero abrir mão da comunicação multilíngue. Portanto, desejo uma ferramenta que me permita escrever em minha língua materna e, ao mesmo tempo, permita que mais pessoas vejam meu conteúdo. Atualmente, o i18n exige que você mesmo traduza e ainda mantenha as atualizações de conteúdo, é muito trabalhoso. Escolho usar um LLM para fazer a tradução para mim, economizando muito tempo e podendo completar traduções para vários idiomas com um clique.

## ✨ Funcionalidades Principais

1. 🌍 **Tradução Multilíngue por IA**: Usa IA para tradução incremental, permitindo que o usuário escreva Markdown em sua língua materna, mas o usuário pode ser multilíngue.
2. 📊 **Extração de Metadados por IA**: Extrai automaticamente título, descrição, resumo, palavras-chave, público-alvo, alias amigável para URL, etc.
3. 🏷️ **Classificação por Tags por IA**: Usa IA para extrair e gerenciar tags e categorias do conteúdo.
4. 🧭 **Navegação por Categorias por IA**: Usa IA para gerar mapa do site e navegação, a localização dos arquivos fonte não é sensível.
5. 🤖 **Resumo do Site Inteiro por IA**: Pode gerar resumos do site inteiro em vários estilos.

E alguns pontos não relacionados a IA:

1. ⚙️ **Configuração Zero**: Todas as configurações e cache estão ocultos no diretório `.czon`, mantendo a estrutura do projeto limpa.
2. 🔄 **Build Incremental**: Detecta alterações baseadas em hash de conteúdo, processa apenas arquivos modificados.
3. 📚 **Suporte a Extensões Markdown**: Suporte nativo para fórmulas matemáticas KaTeX, diagramas Mermaid, carrosséis Embla, notas de rodapé, etc.
4. 🚀 **Geração de Site Estático**: SSG baseado em React integrado, gera site estático multilíngue.
5. 🌐 **Roteamento Automático por Idioma do Visitante**: Roteia automaticamente para a versão no idioma correspondente com base no idioma do visitante.

## 📦 Início Rápido

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (recomenda-se versão LTS 24, ou versão 18 ou superior, precisa do comando `npx`)
- [Chave de API OpenAI](https://platform.openai.com/account/api-keys) obtida, ou chave de API compatível com OpenAI
- Git instalado (usado para listar arquivos Markdown a partir do Git, ignorando arquivos filtrados pelas regras do .gitignore)

### Configuração de Variáveis de Ambiente

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Obrigatório: Substitua pela sua Chave de API OpenAI
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Opcional, usa a API oficial da OpenAI por padrão
export OPENAI_MODEL="gpt-3.5-turbo"  # Opcional, usa o modelo gpt-3.5-turbo por padrão
export OPENAI_MAX_TOKENS="4096"  # Opcional, define o limite máximo de tokens (se ignorado, usa o padrão do modelo; para tradução de textos longos, recomenda-se definir um valor maior, como 8192, dependendo do suporte máximo de tokens do modelo usado)

# Se precisar usar um proxy HTTP para acessar a API da OpenAI, pode definir as seguintes variáveis
export HTTPS_PROXY="http://seu-proxy.com:8080"  # Opcional, define proxy HTTPS
export HTTP_PROXY="http://seu-proxy.com:8080"   # Opcional, define proxy HTTP
```

### Construir Site Multilíngue

Execute em qualquer pasta gerenciada por Git:

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Como os códigos de idioma serão usados posteriormente em muitas funcionalidades da geração do site estático, certifique-se de usar códigos de idioma padrão BCP 47. Por exemplo, `zh-Hans` representa chinês simplificado, `en-US` representa inglês americano. Você pode adicionar mais idiomas conforme necessário, por exemplo, `es-ES` (espanhol), `ja-JP` (japonês), `ko-KR` (coreano), etc.
Para uma lista de códigos de idioma padrão, consulte [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).

Diretório de saída: `.czon/dist`. Posteriormente, será necessário implantar o conteúdo deste diretório em uma plataforma de hospedagem de site estático.

Para uso detalhado, execute `npx czon@latest --help`.

## 🔗 Comparação com Outras Ferramentas

| Característica     | CZON                     | Docusaurus      | VuePress        | Astro           |
| ------------------ | ------------------------ | --------------- | --------------- | --------------- |
| **AI-Nativo**      | ✅ Integração Profunda   | ❌              | ❌              | ❌              |
| **Configuração Zero** | ✅ Configuração Ocultada | ❌ Precisa de arquivo de configuração | ❌ Precisa de arquivo de configuração | ❌ Precisa de arquivo de configuração |
| **Tradução Multilíngue por IA** | ✅ Tradução Incremental Automática | ❌ Tradução Manual | ❌ Tradução Manual | ❌ Tradução Manual |
| **Classificação/Tags Automática** | ✅ Extração por IA | ❌ Configuração Manual | ❌ Configuração Manual | ❌ Configuração Manual |
| **Extensões Markdown** | ✅ KaTeX, Mermaid, Embla | ✅ Via plugins | ✅ Via plugins | ✅ Via plugins |
| **Personalização de Tema** | ❌ Limitada | ✅ Rica | ✅ Rica | ✅ Rica |

O CZON se posiciona como um **motor de conteúdo aprimorado por IA**, não como um SSG completo. Ele se concentra em melhorar a eficiência da criação de conteúdo por meio da IA, sendo adequado para criadores que valorizam a qualidade do conteúdo e desejam reduzir a carga de configuração. Na verdade, o CZON pode ser usado em conjunto com ferramentas SSG como Docusaurus, VuePress, Astro, atuando como um motor de front-end para geração e gerenciamento de conteúdo.

## 📞 Suporte

- Página do Projeto: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- Issues no GitHub: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord para Discussão: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_Deixe a escrita retornar à tranquilidade, deixe o conteúdo crescer naturalmente._