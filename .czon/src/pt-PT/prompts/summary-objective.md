---
"title": "Guia para Análise de Estilo Objetivo e Neutro"
"summary": "Este documento é um guia sobre como criar relatórios de análise de estilo objetivo e neutro. Detalha os pontos de leitura a focar ao analisar documentos (como caminho do ficheiro, data, nome do projeto, papéis das pessoas, factos objetivos, etc.) e define a estrutura da base de conhecimento (incluindo índice de ficheiros, índice de projetos, índice de pessoas, linha do tempo e índice de quadros teóricos). O documento também fornece estratégias de compressão, orientando sobre como simplificar o conteúdo quando necessário, enquanto enfatiza a necessidade de reter índices-chave. O posicionamento de estilo exige que o conteúdo seja apresentado de uma perspetiva objetiva e neutra, evitando avaliações subjetivas e coloração emocional. O público-alvo inclui novos leitores, potenciais colaboradores e investidores. O documento lista proibições (como não adicionar expressões emocionais ou especulações) e a estrutura de capítulos obrigatória (como visão geral, introdução ao projeto, temas-chave, linha do tempo, pessoas principais e resumo do quadro teórico), e especifica o ficheiro de saída e a lista de verificação de qualidade."
"tags":
  - "Análise de Documentos"
  - "Objetivo e Neutro"
  - "Estrutura da Base de Conhecimento"
  - "Extração de Informação"
  - "Guia de Estilo"
  - "Redação de Relatórios"
  - "Dados Estruturados"
---

# Relatório de Análise de Estilo Objetivo e Neutro

## Pontos de Atenção na Leitura

Ao ler cada ficheiro, extrair com foco:

- Caminho e título do ficheiro
- Informação de data
- Nomes e descrições funcionais dos projetos envolvidos
- Pessoas mencionadas e seus papéis
- Factos e dados objetivos
- Informações específicas como números de versão, marcos, etc.

**Ignorar**: Avaliações subjetivas, expressões emocionais, conteúdo especulativo

## Estrutura da Base de Conhecimento

```
### Índice de Ficheiros
| Caminho do Ficheiro | Título | Data |
|---------------------|--------|------|

### Índice de Projetos
| Nome do Projeto | Descrição | Ficheiros Relacionados |
|-----------------|-----------|------------------------|

### Índice de Pessoas
| Pessoa | Papel | Ficheiros Relacionados |
|--------|-------|------------------------|

### Linha do Tempo
| Data | Evento | Ficheiro de Origem |
|------|--------|---------------------|

### Índice de Teoria/Quadro Teórico
| Nome | Ideia Central | Ficheiro de Origem |
|------|---------------|---------------------|
```

## Estratégia de Compressão

Quando for necessário comprimir a base de conhecimento:

1. **Deve reter**: Índice de ficheiros (caminho + título), Índice de projetos, Índice de pessoas
2. **Pode simplificar**: Linha do tempo (reter nós críticos), Índice teórico (reter nome e origem)
3. **Pode descartar**: Descrições detalhadas, eventos secundários

---

## Posicionamento de Estilo

Apresentar o conteúdo de uma perspetiva objetiva e neutra, evitando avaliações subjetivas e coloração emocional. Enfatizar factos e dados, garantindo a precisão e fiabilidade da informação.

**Público-alvo**: Novos leitores que precisam de compreender rapidamente o panorama do repositório, potenciais colaboradores, investidores
**Tom de escrita**: Profissional, contido, neutro, como ao escrever um currículo ou biografia
**Objetivo**: Ajudar o leitor a compreender abrangentemente a informação básica e os pontos de vista centrais do conteúdo, formando o seu próprio julgamento

## Proibições

- ❌ Não adicionar expressões emocionais (ex: "emocionante", "infelizmente")
- ❌ Não fazer especulações (ex: "possivelmente", "talvez", "provavelmente")
- ❌ Não usar vocabulário de avaliação subjetiva (ex: "excelente", "péssimo", "interessante")
- ❌ Não avaliar o que é bom ou mau, superior ou inferior
- ❌ Não usar a primeira pessoa

## Estrutura de Capítulos Obrigatória

### Visão Geral

- Breve introdução ao proprietário do repositório (nome/ID, identidade, áreas principais)
- Período de tempo abrangido pelo conteúdo do repositório
- Lista dos principais projetos (enumeração breve)

### Introdução ao Projeto

Para cada projeto principal, usar a seguinte estrutura:

```markdown
### [Nome do Projeto]

- **Origem**: A origem e o contexto do projeto
- **Funcionalidades Principais**:
  - Funcionalidade 1
  - Funcionalidade 2
- **Iteração de Versões**: Se houver histórico de versões, explicar brevemente
- **Ficheiros Relacionados**: [Título do Artigo](../caminho/para/o/ficheiro.md)
```

### Temas-Chave

Organizar o conteúdo por categorias temáticas:

```markdown
### 1. [Nome do Tema]

- [Título do Artigo1](../caminho/para/o/ficheiro1.md): Resumo do ponto de vista central
- [Título do Artigo2](../caminho/para/o/ficheiro2.md): Resumo do ponto de vista central
```

### Linha do Tempo

Usar formato de tabela para mostrar eventos-chave:

```markdown
| Data        | Evento-Chave             |
| ----------- | ------------------------ |
| AAAA-MM-DD  | Descrição do evento (declaração objetiva) |
```

### Pessoas Principais

Usar formato de tabela:

```markdown
| Pessoa   | Papel       | Notas                |
| -------- | ----------- | -------------------- |
| Nome/ID  | Cargo/Relação | Informação objetiva relacionada |
```

### Resumo do Quadro Teórico

Para teorias/quadros teóricos propostos no repositório:

```markdown
### [Nome do Quadro Teórico]

- **Ideia Central**: Resumo numa frase
- **Elementos-Chave**: Enumerar os componentes centrais
- **Expressão Matemática**: Se houver fórmulas, listá-las
```

## Ficheiro de Saída

`SUMMARY/1-objective.md`

## Lista de Verificação de Qualidade

- [ ] Sem vocabulário de avaliação subjetiva
- [ ] Sem expressões emocionais
- [ ] Todas as ligações apontam para ficheiros específicos
- [ ] O texto da ligação é o título do artigo
- [ ] Inclui todos os capítulos obrigatórios
- [ ] A linha do tempo e as tabelas de pessoas têm o formato correto