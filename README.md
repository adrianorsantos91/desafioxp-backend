# Boas vindas ao repositório do Desafio Técnico XP - Backend

Este projeto contempla o desenvolvimento de uma aplicação que se assemelha a um case real do dia a dia, um aplicativo de investimento em ações, com algumas funcionalidades de conta digital.

# Desenvolvimento:


# Orientações:

<details>
<summary><strong>Rodando no Docker ou Localmente:</strong></summary>

## Com Docker

> Inicie o serviço node com o comando `docker compose up -d`
-  Esse serviço irá inicializar um container chamado `investiments_api`
- A partir daqui você pode rodar o container `investments_api` via CLI ou abri-lo no Vs Code.

> Use o comando `docker exe -it investments_api  bash`.
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> Instale as depedências [**caso existam] com `npm install`

<strong>Atenção:</strong> Ao optar por utilizar o Docker **TODOS** os camandos disponiveis no `package.json`(npm run debug, npm test, ...) devem ser executados **DENTRO** do container, ou seja, no terminak que aparece após a execução do comando `docker exec` citado anteriormente.

<strong>Atenção:</strong> Caso tenha `MySQL` instalado em seu computador, pare o serviço para não ter conflitos. Em alguns casos o seguinte comando pode resolver: `sudo service mysql stop`.

-----

# Sem Docker

> Instale as dependências [**Caso existam**] com `npm install`
- Para rodar este método você precisa estar com o `node` instalado em seu computador

</details>

<details>
<summary>Preparando</summary></br>

1. Faça um fork e Clone o repositório

- Ao acessar o repostiório original, clique `FORK` no menu superior do GitHub
- Faça um clone do seu fork no seu computador:
    - Exemplo: 
        - `git clone git@github.com:adrianorsantos91/desafioxp-backend.git`
        - Entre na pasta do repositório que você acabou de clonar:
            - `cd desafioxp-backend`
- Ao fazer um clone direto, você não poderá fazer Pull request para o repostitório original.

2. Instale as dependências do projeto:

- `npm install`

3. Crie uma branch a partir da branch `main`

- Verifique se você esta na branch `main`
    - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
     - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits`
     - Exemplo: `git checkout -b nome-da-sua-branch`

4. Adicione as mudanças ao stage do Git e faça um `commits`

- Verifique que as mudanças aind não estão no stage
    - Exemplo: `git status` (deve aparecer listada as pastas em vermelhor)
- Adicione o novo arquivo ao stage do Git
    - Exemplo:
        - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        - `git status` (deve aparecer listado o arquivo os arquivos em verde)
    - Faça o `commit` inicial
        - Exemplo:
            - `git commit -m 'first commit'`
            - `git status` (deve aparecer uma mensagem tipo _nothing to commit_)

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin nome-da-sua-branch`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Request_ _(PR)_ do seu repositório
- Clique no botão verde _"Compare && Pull Request"_;
- Clique no botão verde _"Create pull request"_;
- Adicione uma declaração para o _Pull Request_ e clique no botão verde _"Create pull request"_;
- Volte até a página de _Pull Request_ do repositório e confira que o seu _Pull Request_ está criado.

<br><br>

</details>
<br></br>

<details>
<summary><strong>Digrama ER e Entidades</strong></summary>

### Diagrama de Entidades-Relacionamento


Para visualizar a construção das tabelas através do ORM, veja o DER a seguir:

[DER](https://imgur.com/5iUu6jv)
-----

Formato das entidades

Neste projeto foi utilizado o `ORM Sequelize` para criar e atualizar o banco de dados.

- Uma tabela chamada <strong>Users</strong>, contendo dados com a seguinte estrutura:

    ```json
    {
        "id": 1,
        "displayName": "Guilherme Almeida",
        "email": "guilherme@email.com",
        "password": "123456",
        "amount": 50.00,
    }
    ```

- Uma tabela chamada <strong>Assets</strong> contendo dados com a seguinte estrutura:

    ```json
    {
        "id": 1,
        "quantityAsset": 10,
        "price": 50.00,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.947Z",
    }
    ```

- Uma tabela chamada <strong>Investments</strong> contendo dados com a seguinte estrutura:

    ```json
    {
        "id": 1,
        "userId": 1, // Chave estrangeira, referenciando o id de `Users`
        "quantityAsset": 10,
        "price": 50.00,
    }
    ```

- Uma tabela chamada <strong>InvestmentsAssets</strong> contendo dados com a seguinte estrutura:

    ```json
    {
        "investmentId": 1, // Chave primária e estrangeira, referenciando o id de `Investments`
        "assetId": 1, // Chave primária e estrangeira, referenciando o id de `Assets`
    }
    ```

    *Os dados acima são fictícios, e estão aqui apenas como exemplo*

### Dicas de scripts prontos

- Delete o banco de dados:
```json
"drop": "npx sequelize-cli db:drop"
```

- Cria o banco e gera as tabelas:
```json
"prestart": "npx sequelize-cli db:create && npx-sequelize-cli db:migrate"
```

- Insere dados/Popula a tabela:
```json
"seed": "npx sequelize-cli db:seed:all"
```

---

</details>
