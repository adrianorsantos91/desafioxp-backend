# Boas vindas ao repositório do Desafio Técnico XP - Backend

Este projeto contempla o desenvolvimento de uma aplicação que se assemelha a um case real do dia a dia, um aplicativo de investimento em ações, com algumas funcionalidades de conta digital.

# Desenvolvimento

<details>
<summary><strong>Planejamento:</strong></summary></br>

Inicialmente reservei os primeiros dois dias para estruturar as informaçoes que foram disponibilizadas para o desafio, em um formato que ficasse mais claro como deveria seguir na construção do desafio do decorrer dos próximos dias. 

Criei uma página no NOTION, e organizei todos os dados que foram passados na cartilha do desafio, separando em blocos que deveriam ser feitas de forma sequencial.

Após essa organização, reservei um tempo para desenhar e estrutura a relação das tabelas, seguindo as orientações passadas no desafio, neste processo surgir várias interpretações de como deveria ser feita, mas enquanto desenhava a estrutura pode perceber com maior facilidade como realmente deveria ser a relação das tabelas.

Em sequência defini que usaria o ORM Sequelize para fazer o CRUD, por conta da praticidade de montar o banco com os dados iniciais e fazer o relacionamento entre as tabelas. Pensando que ele poderá facilitar numa possivel mudança de paradigmas de banco de dados relacional e da orientação a objetos.

Ao finalizar a criação do banco de dados, apliquei a arquiterura MSC, na qual a camada de model esta sendo coberta pelo Sequelize, criei a camada de service responsável pelas regras de negócio, e a camada de controlle para as requisições. Após esta implementação que por sinal a etapa de compra e venda, foi um desafio em tanto por conta de algumas definiões que ficaram faltando na construção da aplicação e quebrou algumas vezes, até descobri qual era o problema.

Por fim, segui para construção do frontend para consumir a API que havia criado, já fazia alguns meses que não esta programando processo do frontend, mas veio a tona o que muitas pessoas já haviam comentado antes, de que com o tempo migrar entre as linguagens ficaria mais fácil com o tempo, aprendendo o conceito, lógica e a ler a documentação, facilitou bastante na hora de interpretar os erros que foram aparecendo no decorrer na construção da interface. E consegui aprender a utilizar uma nova biblioteca ˜AXIOS˜ para intergração do projeto REACT com qualquer servicos de API disponível.

<br></br>
</details>

<details>
<summary><strong>Desafios e decisões:</strong></summary></br>

1. Estrututarar o planejamento dos 10 dias de desafio:

    - Como haveria outros projetos e demais tarefas extras desafio e Trybe, foi um pouco trabalhoso definir e alterar os compromissos para conciliar e entregar o projeto dentro dos 10 dias. Tentei buscar definir pequenas tarefas diárias divididas para os 10 dias, assim facilitando o processo de evolução.

2. Definir a relação entre as tabelas a serem criadas:

    - Inicialmente havia pensando em fazer uma estrutura na qual poderia criar um histórico de compra e venda, assim como é fornecido na corretora, mas como estava ficando muito complexo e pelo tempo que havia planejado não conseguiria entregar as solicitações minimas, então resolvi focar na entrega principal e vou colocar essa ideia como uma implementação deste projeto.

    - Durante o processo de criar uma rota para filtrar os ativos por cliente, tive um problema constante e que me fez mudar a lógica algumas vezes, e fazer inúmeras pesquisas em forúns, assistir video aulas, revisar conteúdos fornecidos pela Trybe. Esse erro resultava na duplicação da primeira coluna da tabela, não permitindo fazer a relação correta entre as tabelas, inicialmente até questionei se a relacão estava correta, mas somente depois percebi que na tabela intermediária faltou especificar as foreignkey como primaryKey.

3. Durante a construção da Lógica de compra e venda:

    - Por conta do problema com o relacionamento das tabelas, o desenvolvimento da funcão de compra/venda estava constantemente falhando com a duplicidade de valores na inserção do banco. Neste processo, criei algumas lógicas que não resolveram, após isso optei por me afastar um pouco do problema, pensar com mais calma, e dividir a implementação em blocos.
    

</details>

<details>
<summary><strong>Pontos para implementação:</strong></summary></br>

</details>

# Features

<details>

<summary><strong>Desenvolvido a aplicação em `Node.js`:</strong></summary></br>

- ORM Sequelize;
- API REST para CRUD com relações;
- Arquitetura MSC
- Integração do Docker e do docker-compose;
- Autenticação JWT;
- Integração Backend e Frontend, consumindo API com AXIOS;
- Reactjs
- Testes unitários

</details>


# Orientações

<details>
<summary><strong>Rodando no Docker ou Localmente:</strong></summary></br>

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
<summary><strong>Preparando</strong></summary></br>

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

<details>
  <summary><strong>Informações sobre as váriaveis de ambiente</strong></summary></br>

  Para rodar o projeto localmente, você deverá configurar as váriaveis de ambiente utilizadas no projeto. Para dar contexto de teste local, é importante configurar as variáveis: `MYSQL_HOST`, `MYSQL_DB_NAME`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_PORT `:

>`env.example`
  ```env
  API_PORT=3000

  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_DB_NAME=investments_api
  MYSQL_USER=root
  MYSQL_PASSWORD=password

  JWT_SECRET=suaSenhaSecreta
  ```


  #### Variável `JWT_SECRET`:

  Esta variável de ambiente deverá ser utilizada tanto para criar o token quanto para verificá-lo.
</details>

<details>
<summary><strong>Digrama ER e Entidades</strong></summary></br>

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

<details>
<summary><strong>Para começar</strong></summary></br>

- Acesse o terminal da projeto;
- Defina se irá rodar o projeto com ou sem docker;

### Backend:

- Abra o terminal e rode o seguinte comando: `npm run debug` para rodar a aplicação desenvolvida no backend;

> Backend: se certifique que as portas 3000 e 3306 não estejam em uso, para rodar o projeto, caso esteja:

- Verifique se você tem algum container rodando na porta:
    - use este comando para listar as imagens: `docker ps`
    - Parando o container: `docker stop "ID_CONTAINER"`
    - Você pode limpar as imagens em cache:
        - utilize este comando: `docker images prune -a`

### Frontend:

- Agora em um segundo terminal, acesse a pasta frontend:
    - use o seguinte comando: `cd frontend`
- Após acessar, inicie a aplicação de frontend:
    - use o seguinte comando: `npm start`

### Testando a aplicação:

- Acesse as rotas `frontend/src/routes`
- Acesse a seguintes rotas para:
    - Listar os ativos por cliente: `/ativos/clientes/{cod-cliente}`
    - Consultar o ativo pelo código: `/ativos/{cod-ativo}`
    - Consultar a conta do cliente: `/conta/{cod-cliente}`
    - Efetuar uma compra de ativo: `/investimentos/comprar`
    - Efetuar uma venda de ativo: `/investimentos/vender`

</details>

<details>
<summary><strong>Links</strong></summary>
<details>
