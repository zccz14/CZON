---
"title": "Guia para Implementar um Site Estático CZON no GitHub Pages"
"summary": "Este artigo detalha como implementar um site estático multilingue gerado pelo CZON no GitHub Pages através do GitHub CLI. Primeiro, é necessário instalar e iniciar sessão no GitHub CLI, garantindo permissões de 'repo'. Em seguida, execute o comando `npx czon@latest config github`, que guiará o utilizador através de uma série de passos, incluindo verificação de permissões, inicialização do repositório Git, configuração do repositório remoto, ativação do GitHub Pages definido como tipo 'workflow', criação ou atualização do ficheiro de Workflow, submissão e envio das alterações e, finalmente, obtenção do URL do Pages. Todo o processo é automatizado, simplificando o fluxo de implementação."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Site Estático"
  - "Guia de Implementação"
  - "GitHub CLI"
  - "Multilingue"
  - "Implementação Automatizada"
---

# Implementar no GitHub Pages

Este guia explica como implementar um site estático multilingue gerado pelo CZON no GitHub Pages através do GitHub CLI.

Primeiro, instale a ferramenta [GitHub CLI](https://cli.github.com/) (se ainda não estiver instalada) e certifique-se de que iniciou sessão (se ainda não o fez):

```bash
$ gh --version # Verifica a versão para confirmar a instalação bem-sucedida
```

Certifique-se de que iniciou sessão e tem permissão de acesso `repo` ao repositório de destino:

```bash
$ gh auth login -s repo # Inicia sessão na conta GitHub, solicitando login via navegador ou token
$ gh auth status # Verifica o estado de login, garantindo que a sessão foi iniciada com sucesso e tem permissão 'repo' para o repositório de destino
```

O restante processo requer apenas a execução do seguinte comando e seguir as instruções:

```bash
$ npx czon@latest config github
```

Este comando irá guiá-lo através dos seguintes passos:

1.  Verifica se as permissões do `gh` incluem `repo`. Caso contrário, solicita que inicie sessão novamente e adicione a permissão `repo`.
2.  Se o diretório local não for um repositório Git, solicita a inicialização de um novo repositório Git.
3.  Verifica as configurações do repositório Git remoto no diretório local, procurando por um repositório remoto GitHub. Se não existir um repositório remoto GitHub, solicita a criação de um novo repositório remoto e a sua adição como `origin`. Se `origin` já existir mas não for um repositório GitHub, solicita a adição de um novo repositório remoto GitHub como `upstream`.
4.  Verifica se o GitHub Pages está ativado e configurado como tipo `workflow`. Se não estiver, ativa-o e corrige a configuração para implementação via Actions através da API `gh api`. Também configura o CNAME (se tiver um domínio personalizado).
5.  Verifica o ficheiro de GitHub Workflow. Se não existir, cria o ficheiro de Workflow para Pages; se já existir mas não for a versão mais recente, pergunta se deseja atualizar o ficheiro de Workflow.
6.  Submete o ficheiro de Workflow e envia as alterações para o repositório remoto.
7.  Apresenta o URL do site GitHub Pages, obtendo o URL mais recente através da API `gh api`.