---
"title": "Regras Básicas para Geração de Relatórios de Análise por IA"
"summary": "Este documento fornece regras básicas para a geração de relatórios de análise por IA, enfatizando a necessidade de seguir estritamente o fluxo de leitura de documentos, que inclui cinco fases: obtenção da lista de ficheiros, leitura e resumo em lotes, gestão de contexto, verificação de integridade e geração do relatório. Os princípios fundamentais incluem ler todos os ficheiros individualmente, basear-se em factos, normalizar a referência de ligações e considerar o peso temporal. As regras gerais exigem que o relatório comece com um formato específico, seja enviado para um diretório designado e proíbem a geração do relatório ou a omissão de qualquer ficheiro antes de concluir a leitura de todos os ficheiros."
"tags":
  - "Análise por IA"
  - "Geração de Relatórios"
  - "Leitura de Documentos"
  - "Regras"
  - "Markdown"
  - "Baseado em Factos"
  - "Normas de Citação"
  - "Gestão de Processos"
---

# Geração de Relatórios de Análise por IA - Regras Básicas

## Fluxo de Leitura de Documentos (Deve ser seguido estritamente)

### Princípios Fundamentais

Este repositório pode conter centenas ou milhares de ficheiros Markdown. Deves **ler cada ficheiro individualmente**, sem omitir nenhum.
Para lidar com um grande volume de ficheiros, utiliza-se uma estratégia de **leitura e resumo progressivos**.

### Fase 1: Obter a Lista Completa de Ficheiros

1.  Executar `npx czon@latest ls-files` para obter todos os ficheiros Markdown
2.  Registar o número total de ficheiros N
3.  Guardar a lista de ficheiros como uma fila de leitura pendente

### Fase 2: Leitura e Resumo em Lotes

Processar os ficheiros em lotes. Recomenda-se 10-20 ficheiros por lote, mas podes ajustar conforme o tamanho e complexidade dos ficheiros.

**Para cada lote:**

1.  **Leitura**: Utilizar a ferramenta Read para ler o conteúdo completo de cada ficheiro do lote, um por um
2.  **Extração**: Extrair informações relevantes com base nos **pontos de atenção do estilo atual** (ver Guia de Estilo abaixo)
3.  **Resumo do Lote**: Organizar as informações extraídas do lote num resumo estruturado
4.  **Acumulação**: Integrar o resumo do lote na "Base de Conhecimento" (ver estrutura da Base de Conhecimento no Guia de Estilo abaixo)

### Fase 3: Gestão de Contexto

Quando o contexto se aproximar do limite:

1.  **Comprimir a Base de Conhecimento**: Comprimir a Base de Conhecimento de acordo com a **estratégia de compressão do estilo atual** (ver Guia de Estilo abaixo)
2.  **Manter o Índice**: Independentemente da compressão, deve-se manter o índice de caminhos e títulos de todos os ficheiros
3.  **Continuar a Leitura**: Utilizar a Base de Conhecimento comprimida para continuar a processar os ficheiros restantes

### Fase 4: Verificação de Integridade

Antes de gerar o relatório, deve-se confirmar:

1.  Todos os N ficheiros da lista foram processados
2.  A Base de Conhecimento contém informações básicas de cada ficheiro (pelo menos o caminho e o título)

**Se forem detetadas omissões**: Voltar à Fase 2 para processar os ficheiros omitidos.

### Fase 5: Geração do Relatório

Só se pode começar a gerar o relatório após concluir todas as fases acima.

### Comportamentos Proibidos

-   ❌ Não iniciar a geração do relatório antes de ler todos os ficheiros
-   ❌ Não omitir qualquer ficheiro, independentemente do número total
-   ❌ Não afirmar "ter uma visão completa" após ler apenas parte dos ficheiros
-   ❌ Não inventar ficheiros ou conteúdos inexistentes na Base de Conhecimento

---

## Regras Gerais

### 1. Princípio da Base em Factos

-   Lembrar-te sempre de basear-te em conteúdos factuais, não deve haver situações desligadas dos factos
-   Todos os pontos de vista devem ter suporte no texto original
-   Não inventar conteúdos inexistentes

### 2. Normas de Citação de Ligações

-   Ao citar ligações do texto original, garantir que as ligações são válidas
-   **Sempre ligar ao ficheiro Markdown específico**, não ao diretório
-   **O texto da ligação deve ser o título correspondente**, não o nome do ficheiro
-   Como a geração é para o diretório SUMMARY, usar caminhos relativos começando com `../` nas citações

**Exemplo Correto**:

```markdown
[Guerra de Desgaste do Capital: Estratégia para Investidores Individuais Transcenderem Classes](../INSIGHTS/6.md)
[Da Criação à Distribuição — Construindo um Motor de Conteúdo AI-Native](../INSIGHTS/4.md)
```

**Exemplo Errado**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Usou o nome do ficheiro em vez do título
[Guerra de Desgaste do Capital](../INSIGHTS/) ← Ligou a um diretório
```

### 3. Formato do Cabeçalho

Cada relatório deve começar com o seguinte formato:

```markdown
# [Título do Relatório]

**Data da Análise por IA**: AAAA-MM-DD
**Nota**: Este relatório foi gerado por IA, o conteúdo é apenas para referência.

---
```

### 4. Peso Temporal

-   Considerar o intervalo temporal, atribuindo maior peso aos artigos mais recentes
-   Mas não ignorar conteúdos importantes mais antigos

### 5. Local de Saída

-   Todos os relatórios devem ser gerados no diretório `SUMMARY/`
-   Os nomes dos ficheiros devem seguir o formato especificado