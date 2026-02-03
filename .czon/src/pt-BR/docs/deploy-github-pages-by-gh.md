---
"title": "Guia para Implantar um Site Estático CZON no GitHub Pages"
"summary": "Este artigo detalha como implantar um site estático multilíngue gerado pelo CZON no GitHub Pages usando o GitHub CLI. Primeiro, é necessário instalar e fazer login no GitHub CLI, garantindo permissões de repositório. Em seguida, execute o comando `npx czon@latest config github`, que guiará o usuário por uma série de etapas: verificar permissões, inicializar um repositório Git, configurar o repositório remoto, habilitar o GitHub Pages e defini-lo como tipo workflow, criar ou atualizar o arquivo de Workflow, fazer commit e push das alterações e, finalmente, obter a URL do Pages. Todo o processo é automatizado, simplificando o fluxo de implantação."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Site Estático"
  - "Guia de Implantação"
  - "GitHub CLI"
  - "Multilíngue"
  - "Implantação Automatizada"
---

# Implantar no GitHub Pages

Este guia explica como implantar um site estático multilíngue gerado pelo CZON no GitHub Pages usando o GitHub CLI.

Primeiro, instale a ferramenta [GitHub CLI](https://cli.github.com/) (se ainda não estiver instalada) e certifique-se de estar logado (se ainda não estiver):

```bash
$ gh --version # Verifique a versão para confirmar a instalação bem-sucedida
```

Certifique-se de estar logado e ter permissão de `repo` para acessar o repositório de destino:

```bash
$ gh auth login -s repo # Faça login na sua conta do GitHub; será solicitado login via navegador ou token
$ gh auth status # Verifique o status de login, garantindo que está logado com sucesso e tem permissão de repo para o repositório de destino
```

O restante do processo requer apenas a execução do seguinte comando e seguir as instruções:

```bash
$ npx czon@latest config github
```

Este comando guiará você pelas seguintes etapas:

1.  Verificar se a permissão do `gh` inclui `repo`. Se não, solicitará um novo login com a permissão `repo`.
2.  Se o diretório local não for um repositório Git, solicitará a inicialização de um novo repositório Git.
3.  Verificar as configurações do repositório Git remoto no diretório local. Se não houver um repositório remoto do GitHub, solicitará a criação de um novo repositório remoto e o adicionará como `origin`. Se `origin` já existir, mas não for um repositório do GitHub, solicitará a adição de um novo repositório remoto do GitHub como `upstream`.
4.  Verificar se o GitHub Pages está habilitado e configurado como tipo `workflow`. Se não estiver, habilitá-lo e corrigi-lo via API `gh api` para implantação via Actions. Também configurará o CNAME (se você tiver um domínio personalizado).
5.  Verificar o arquivo de GitHub Workflow. Se não existir, criará o arquivo de Workflow do Pages. Se já existir, mas não for a versão mais recente, perguntará se deseja atualizá-lo.
6.  Fazer commit do arquivo de Workflow e enviar (push) as alterações para o repositório remoto.
7.  Fornecer a URL do site do GitHub Pages, obtendo a URL mais recente via `gh api`.