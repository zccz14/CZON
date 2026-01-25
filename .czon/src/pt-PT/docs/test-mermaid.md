---
"title": "Documento de Teste de Diagramas Mermaid"
"summary": "Este documento é um ficheiro de teste que visa verificar o suporte de renderização de diagramas Mermaid na plataforma CZON. O documento fornece exemplos de vários tipos de diagramas Mermaid, incluindo fluxogramas, diagramas de sequência, diagramas de Gantt, diagramas de classes, diagramas de estado e gráficos de setores, demonstrando definições de diagramas desde estruturas básicas até aplicações complexas. Além disso, o documento inclui um teste de sintaxe incorreta para verificar a capacidade do sistema de lidar com diagramas errados. Através destes exemplos, o documento testa de forma abrangente a funcionalidade e robustez da integração Mermaid na plataforma CZON, garantindo que os diagramas são renderizados corretamente e que as situações excecionais são tratadas adequadamente."
"tags":
  - "Mermaid"
  - "Teste de Diagramas"
  - "CZON"
  - "Fluxograma"
  - "Diagrama de Sequência"
  - "Diagrama de Gantt"
  - "Diagrama de Classes"
  - "Diagrama de Estado"
"date": "2024-01-01"
---

# Teste de Diagramas Mermaid

Este é um ficheiro de teste para verificar a funcionalidade de renderização de diagramas Mermaid no CZON.

## Exemplo de Fluxograma

```mermaid
graph TD
    A[Início] --> B{Continuar?}
    B -->|Sim| C[Executar Ação]
    B -->|Não| D[Fim]
    C --> E[Verificar Resultado]
    E --> F{Sucesso?}
    F -->|Sim| G[Concluído]
    F -->|Não| H[Repetir]
    H --> C
    G --> D
```

## Exemplo de Diagrama de Sequência

```mermaid
sequenceDiagram
    participant Utilizador
    participant Sistema
    participant BaseDeDados

    Utilizador->>Sistema: Submeter Pedido
    Sistema->>BaseDeDados: Consultar Dados
    BaseDeDados-->>Sistema: Retornar Resultado
    Sistema-->>Utilizador: Mostrar Resultado
```

## Exemplo de Diagrama de Gantt

```mermaid
gantt
    title Cronograma do Projeto
    dateFormat  YYYY-MM-DD
    section Design
    Análise de Requisitos     :done,    des1, 2024-01-01, 7d
    Design do Protótipo       :active,  des2, 2024-01-08, 5d
    Design Detalhado          :         des3, after des2, 5d
    section Desenvolvimento
    Desenvolvimento Frontend  :         dev1, after des3, 10d
    Desenvolvimento Backend   :         dev2, after des3, 15d
    section Testes
    Testes Unitários          :         test1, after dev1, 5d
    Testes de Integração      :         test2, after dev2, 5d
```

## Exemplo de Diagrama de Classes

```mermaid
classDiagram
    class Animal {
        +String nome
        +int idade
        +void comer()
        +void dormir()
    }
    class Cão {
        +void ladrar()
    }
    class Gato {
        +void miar()
    }

    Animal <|-- Cão
    Animal <|-- Gato
```

## Exemplo de Diagrama de Estado

```mermaid
stateDiagram-v2
    [*] --> Inativo
    Inativo --> Processamento : Iniciar Processamento
    Processamento --> Sucesso : Processamento Bem-Sucedido
    Processamento --> Erro : Processamento Falhou
    Sucesso --> [*]
    Erro --> [*]
```

## Exemplo de Gráfico de Setores

```mermaid
pie title Taxa de Utilização do Navegador
    "Chrome" : 65.2
    "Firefox" : 15.3
    "Safari" : 12.5
    "Edge" : 5.2
    "Outros" : 1.8
```

## Teste de Sintaxe Incorreta (deve mostrar mensagem de erro)

```mermaid
graph TD
    A --> B
    // Falta definição da seta aqui
    C --> D
```

Este ficheiro de teste contém vários tipos de diagramas Mermaid para verificar se a integração Mermaid no CZON está a funcionar corretamente.