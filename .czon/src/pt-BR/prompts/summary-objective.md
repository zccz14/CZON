---
"title": "Guia para Relatórios de Análise em Estilo Objetivo e Neutro"
"summary": "Este documento é um guia sobre como criar relatórios de análise em estilo objetivo e neutro. Ele detalha os pontos de atenção ao analisar documentos (como caminho do arquivo, data, nome do projeto, papéis das pessoas, fatos objetivos, etc.) e define a estrutura da base de conhecimento (incluindo índice de arquivos, índice de projetos, índice de pessoas, linha do tempo e índice de frameworks teóricos). O documento também fornece estratégias de compressão, orientando como simplificar o conteúdo quando necessário, enquanto enfatiza a necessidade de reter índices-chave. O posicionamento de estilo exige que o conteúdo seja apresentado de uma perspectiva objetiva e neutra, evitando avaliações subjetivas e coloração emocional. O público-alvo inclui novos leitores, potenciais colaboradores e investidores. O documento lista proibições (como não adicionar expressões emocionais ou especulações) e a estrutura de capítulos obrigatória (como visão geral, introdução do projeto, temas-chave, linha do tempo, pessoas principais e resumo do framework teórico), além de especificar o arquivo de saída e uma lista de verificação de qualidade."
"tags":
  - "Análise de Documentos"
  - "Objetivo e Neutro"
  - "Estrutura de Base de Conhecimento"
  - "Extração de Informações"
  - "Guia de Estilo"
  - "Redação de Relatórios"
  - "Dados Estruturados"
---

# Relatório de Análise em Estilo Objetivo e Neutro

## Pontos de Atenção na Leitura

Ao ler cada arquivo, extraia com foco:

- Caminho do arquivo e título
- Informações de data
- Nomes dos projetos envolvidos e descrições de funcionalidades
- Pessoas mencionadas e seus papéis
- Fatos objetivos e dados
- Informações específicas como números de versão, marcos, etc.

**Ignore**: Avaliações subjetivas, expressões emocionais, conteúdo especulativo

## Estrutura da Base de Conhecimento

```
### Índice de Arquivos
| Caminho do Arquivo | Título | Data |
|--------------------|--------|------|

### Índice de Projetos
| Nome do Projeto | Descrição | Arquivos Relacionados |
|-----------------|-----------|----------------------|

### Índice de Pessoas
| Pessoa | Papel | Arquivos Relacionados |
|--------|-------|----------------------|

### Linha do Tempo
| Data | Evento | Arquivo de Origem |
|------|--------|-------------------|

### Índice de Teorias/Frameworks
| Nome | Ideia Central | Arquivo de Origem |
|------|---------------|-------------------|
```

## Estratégia de Compressão

Quando for necessário comprimir a base de conhecimento:

1.  **Deve ser mantido**: Índice de arquivos (caminho + título), Índice de projetos, Índice de pessoas
2.  **Pode ser simplificado**: Linha do tempo (mantenha os nós críticos), Índice teórico (mantenha nome e origem)
3.  **Pode ser descartado**: Descrições detalhadas, eventos secundários

---

## Posicionamento de Estilo

Apresente o conteúdo de uma perspectiva objetiva e neutra, evitando avaliações subjetivas e coloração emocional. Destaque fatos e dados, garantindo a precisão e confiabilidade das informações.

**Público-alvo**: Novos leitores que precisam entender rapidamente o panorama do repositório, potenciais colaboradores, investidores.
**Tom de escrita**: Profissional, contido, neutro, como ao escrever um currículo ou histórico profissional.
**Objetivo**: Ajudar o leitor a compreender abrangentemente as informações básicas e os pontos de vista centrais do conteúdo, formando seu próprio julgamento.

## Proibições

- ❌ Não adicione expressões emocionais (ex: "emocionante", "infelizmente")
- ❌ Não faça especulações (ex: "talvez", "possivelmente", "provavelmente")
- ❌ Não use vocabulário de avaliação subjetiva (ex: "excelente", "péssimo", "interessante")
- ❌ Não avalie se algo é bom ou ruim, superior ou inferior
- ❌ Não use a primeira pessoa

## Estrutura de Capítulos Obrigatória

### Visão Geral

- Breve introdução do proprietário do repositório (nome/ID, identidade, áreas principais)
- Período de tempo abrangido pelo conteúdo do repositório
- Lista dos principais projetos (enumeração breve)

### Introdução dos Projetos

Para cada projeto principal, use a seguinte estrutura:

```markdown
### [Nome do Projeto]

- **Origem**: A fonte e o contexto do projeto
- **Funcionalidades Principais**:
  - Funcionalidade 1
  - Funcionalidade 2
- **Iterações de Versão**: Se houver histórico de versões, explique brevemente
- **Arquivos Relacionados**: [Título do Artigo](../caminho/para/arquivo.md)
```

### Temas-Chave

Organize o conteúdo por categorias temáticas:

```markdown
### 1. [Nome do Tema]

- [Título do Artigo 1](../caminho/para/arquivo1.md): Resumo do ponto de vista central
- [Título do Artigo 2](../caminho/para/arquivo2.md): Resumo do ponto de vista central
```

### Linha do Tempo

Use formato de tabela para mostrar eventos-chave:

```markdown
| Data       | Evento-Chave             |
| ---------- | ------------------------ |
| AAAA-MM-DD | Descrição do evento (declaração objetiva) |
```

### Pessoas Principais

Use formato de tabela:

```markdown
| Pessoa    | Papel      | Observações         |
| --------- | ---------- | ------------------- |
| Nome/ID   | Cargo/Relação | Informações objetivas relacionadas |
```

### Resumo do Framework Teórico

Para teorias/frameworks propostos no repositório:

```markdown
### [Nome do Framework]

- **Ideia Central**: Resuma em uma frase
- **Elementos-Chave**: Liste os componentes centrais
- **Expressão Matemática**: Se houver fórmulas, liste-as
```

## Arquivo de Saída

`SUMMARY/1-objective.md`

## Lista de Verificação de Qualidade

- [ ] Sem vocabulário de avaliação subjetiva
- [ ] Sem expressões emocionais
- [ ] Todos os links apontam para arquivos específicos
- [ ] O texto do link é o título do artigo
- [ ] Contém todos os capítulos obrigatórios
- [ ] A formatação das tabelas de linha do tempo e pessoas está correta