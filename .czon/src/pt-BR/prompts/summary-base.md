---
"title": "Regras Básicas para Geração de Relatórios de Análise por IA"
"summary": "Este documento fornece regras básicas para a geração de relatórios de análise por IA, enfatizando a necessidade de seguir estritamente o fluxo de leitura de documentos, que inclui cinco etapas: obtenção da lista de arquivos, leitura e resumo em lotes, gerenciamento de contexto, verificação de integridade e geração do relatório. Os princípios centrais incluem ler todos os arquivos um por um, basear-se em fatos, padronizar a citação de links e considerar o peso temporal. As regras gerais exigem que o relatório comece com um formato específico, seja salvo em um diretório designado e proíbem a geração do relatório ou a omissão de qualquer arquivo antes da leitura completa de todos os arquivos."
"tags":
  - "Análise por IA"
  - "Geração de Relatórios"
  - "Leitura de Documentos"
  - "Regras"
  - "Markdown"
  - "Baseado em Fatos"
  - "Padrão de Citação"
  - "Gerenciamento de Fluxo"
---

# Geração de Relatórios de Análise por IA - Regras Básicas

## Fluxo de Leitura de Documentos (Deve ser seguido estritamente)

### Princípios Centrais

Este repositório pode conter centenas ou milhares de arquivos Markdown. Você deve **ler cada arquivo um por um**, sem pular nenhum.
Para lidar com o grande volume de arquivos, adote uma estratégia de **leitura e resumo progressivos**.

### Etapa 1: Obter a lista completa de arquivos

1.  Execute `npx czon@latest ls-files` para obter todos os arquivos Markdown
2.  Registre o número total de arquivos N
3.  Salve a lista de arquivos como uma fila de leitura pendente

### Etapa 2: Leitura e Resumo em Lotes

Processe os arquivos em lotes. Recomenda-se 10-20 arquivos por lote, mas você pode ajustar conforme o tamanho e a complexidade dos arquivos.

**Para cada lote:**

1.  **Leitura**: Use a ferramenta Read para ler o conteúdo completo de cada arquivo no lote, um por um
2.  **Extração**: Extraia informações relevantes com base nos **pontos de atenção do estilo atual** (veja o Guia de Estilo abaixo)
3.  **Resumo do Lote**: Organize as informações extraídas do lote em um resumo estruturado
4.  **Acumulação**: Mescle o resumo do lote na "Base de Conhecimento" (a estrutura da Base de Conhecimento está no Guia de Estilo abaixo)

### Etapa 3: Gerenciamento de Contexto

Quando o contexto estiver próximo do limite:

1.  **Compactar a Base de Conhecimento**: Compacte a Base de Conhecimento de acordo com a **estratégia de compactação do estilo atual** (veja o Guia de Estilo abaixo)
2.  **Manter o Índice**: Independentemente da compactação, você deve manter o índice de caminhos e títulos de todos os arquivos
3.  **Continuar a Leitura**: Use a Base de Conhecimento compactada para continuar processando os arquivos restantes

### Etapa 4: Verificação de Integridade

Antes de gerar o relatório, você deve confirmar:

1.  Todos os N arquivos da lista foram processados
2.  A Base de Conhecimento contém informações básicas de cada arquivo (pelo menos o caminho e o título)

**Se houver omissões**: Retorne à Etapa 2 para processar os arquivos omitidos.

### Etapa 5: Geração do Relatório

Somente após concluir todas as etapas acima, você pode começar a gerar o relatório.

### Comportamentos Proibidos

-   ❌ Não comece a gerar o relatório antes de ler todos os arquivos
-   ❌ Não pule nenhum arquivo, independentemente da quantidade
-   ❌ Não afirme "ter uma visão completa" após ler apenas parte dos arquivos
-   ❌ Não invente arquivos ou conteúdos inexistentes na Base de Conhecimento

---

## Regras Gerais

### 1. Princípio da Base em Fatos

-   Lembre-se sempre de se basear em fatos; não pode haver situações desvinculadas da realidade
-   Todos os pontos de vista devem ter suporte no texto original
-   Não invente conteúdos que não existem

### 2. Padrão de Citação de Links

-   Ao citar links do texto original, garanta que o link seja válido
-   **Sempre vincule ao arquivo Markdown específico**, não ao diretório
-   **O texto do link deve ser o título correspondente**, não o nome do arquivo
-   Como a geração é para o diretório SUMMARY, use caminhos relativos começando com `../` nas citações

**Exemplo Correto**:

```markdown
[Guerra de Capital Prolongada: Estratégia para Investidores Individuais Superarem Classes](../INSIGHTS/6.md)
[Da Criação à Distribuição — Construindo um Motor de Conteúdo AI-Native](../INSIGHTS/4.md)
```

**Exemplo Incorreto**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Usou o nome do arquivo em vez do título
[Guerra de Capital Prolongada](../INSIGHTS/) ← Vinculou a um diretório
```

### 3. Formato do Cabeçalho

Cada relatório deve começar com o seguinte formato:

```markdown
# [Título do Relatório]

**Data da Análise por IA**: DD/MM/AAAA
**Nota**: Este relatório foi gerado por IA e seu conteúdo é apenas para referência.

---
```

### 4. Peso Temporal

-   Considere o intervalo de tempo, dando maior peso aos artigos mais recentes
-   Mas não ignore conteúdos importantes mais antigos

### 5. Local de Saída

-   Todos os relatórios devem ser gerados no diretório `SUMMARY/`
-   Os nomes dos arquivos devem seguir o formato especificado