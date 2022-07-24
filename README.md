# Boas vindas ao repositório do Desafio Técnico XP - Backend

Este projeto contempla o desenvolvimento de uma aplicação que se assemelha a um case real do dia a dia, um aplicativo de investimento em ações, com algumas funcionalidades de conta digital.

</br>

# Desenvolvimento

<details>
<summary><strong>Planejamento:</strong></summary></br>

Inicialmente, os dois primeiros dias foram reservados para estruturação das informações que foram disponibilizadas para o desafio, em um formato que facilitasse e classificasse as informações, bem como a ordem que deveria seguir para a construção do desafio do decorrer dos próximos dias.

Em seguida, foi criada uma página no NOTION, na qual foram organizados todos os dados que foram passados na cartilha do desafio, classificando em blocos que deveriam ser realizados de modo sequencial.

Após essa organização, foi dedicado um tempo para desenhar e estruturar a relação das tabelas, seguindo as orientações passadas no desafio, neste processo surgiram várias interpretações de como deveria ser realizado, mas enquanto desenhava a estrutura, foi possível perceber com maior facilidade como realmente deveria ser a relação das tabelas.

Em sequência foi chegada a conclusão que seria utilizado o ORM Sequelize para fazer o CRUD, devido a praticidade para montar o banco com os dados iniciais e fazer o relacionamento entre as tabelas. Pensando que ele poderá facilitar numa possível mudança de paradigmas de banco de dados relacional e da orientação a objetos.

Ao finalizar a criação do banco de dados, foi aplicada a arquitetura MSC, na qual a camada de model esta sendo coberta pelo Sequelize, foi criada a camada de service responsável pelas regras de negócio, e a camada de controller para as requisições. Após essa implementação, foi chegada a etapa de compra e venda, revelando-se um desafio e tanto em função de algumas definições que ficaram faltando na construção da aplicação e quebrou algumas vezes, até a descoberta de qual era o problema de fato.

Por fim, o desafio seguiu para construção do frontend para consumir a API que havia sido criado, já fazia alguns meses sem utilizar a programação do processo do frontend, mas veio a tona o que muitas pessoas já haviam comentado antes, a respeito de que com o tempo migrar entre as linguagens ficaria mais fácil com o tempo, aprendendo o conceito, lógica e a ler a documentação, facilitou bastante no momento de interpretar os erros que foram aparecendo no decorrer na construção da interface. Deste modo, foi possível aprender a utilizar uma nova biblioteca "Axios" para integração do projeto REACT com qualquer serviços de API disponível.

</br>
</details>

<details>
<summary><strong>Desafios e decisões:</strong></summary></br>

1. Estruturar o planejamento dos 10 dias de desafio:

    - Como haveriam outros projetos e demais tarefas extras desafio e Trybe, foi um pouco trabalhoso definir e alterar os compromissos para conciliar e entregar o projeto no prazo de 10 dias. Tentei buscar definir pequenas tarefas diárias divididas para os 10 dias, assim facilitando o processo de evolução bem como o cuidado e dedicação para cada uma das atividades que deveriam ser exercidas.

2. Definir a relação entre as tabelas a serem criadas:

    - Inicialmente havia a possibilidade de fazer uma estrutura na qual poderia criar um histórico de compra e venda, assim como é fornecido na corretora, contudo, como estava ficando muito complexo e pelo tempo que havia planejado, poderia comprometer a entrega das solicitações mínimas, então a melhor resolução seria focar na entrega principal e destacar essa ideia como uma implementação deste projeto.

    - Durante o processo de criar uma rota para filtrar os ativos por cliente, houve um problema constante o qual contribuiu para a mudança de lógica algumas vezes e realização de inúmeras pesquisas em fóruns, video aulas e revisão de conteúdos fornecidos pela Trybe. Esse erro resultava na duplicação da primeira coluna da tabela, não permitindo fazer a relação correta entre as tabelas, inicialmente até surgiu o questionamento se a relação estava correta, mas somente depois foi dada a conclusão de que na tabela intermediária faltou especificar as foreignkey como primaryKey.

3. Durante a construção da Lógica de compra e venda:

    - Devido ao problema com o relacionamento das tabelas, o desenvolvimento da funcão de compra/venda estava constantemente falhando com a duplicidade de valores na inserção do banco. Neste processo, foram criadas algumas lógicas que não resolveram, após isso surgiu a ideia afastamento momentâneo do problema, para uma melhor avaliação. Assim, foi possível revisar as questões dificultosas com mais cautela, reavaliar alguns aspectos e dividir a implementação em blocos.
    
</br>
</details>

<details>
<summary><strong>Pontos para implementação:</strong></summary></br>

- [ ] 1. Aplicar a estrutura e estilização UI no Frontend;
- [ ] 2. Aplicar os testes no Frontend;
- [ ] 3. Integrar a autenticação no Frontend e Backend;
- [ ] 4. Criar a documentação da API utilizando o `Swagger`;
- [ ] 5. Refatorar os códigos;
- [ ] 6. Alterar linguagem para Typescript e/ou C#;

</br>
</details>
</br>

# Features

<details>

<summary><strong>Desenvolvido a aplicação em `Node.js`:</strong></summary></br>

- ORM Sequelize;
- API REST para CRUD com relações;
- Arquitetura MSC
- Integração do Docker e do docker-compose;
- Autenticação JWT;
- Integração Backend e Frontend, consumindo API com AXIOS;
- Reactjs;
- Testes unitários;

</br>
</details>
</br>

# Orientações

<details>
<summary><strong>Rodando no Docker ou Localmente:</strong></summary></br>

## Com Docker

> Inicie o serviço node com o comando `docker compose up -d`
-  Esse serviço irá inicializar um container chamado `investiments_api`
- A partir daqui você pode rodar o container `investments_api` via CLI ou abri-lo no Vs Code.

> Utilize o comando `docker exe -it investments_api  bash`.
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> Instale as depedências [**caso existam] com `npm install`

<strong>Atenção:</strong> Ao optar por utilizar o Docker **TODOS** os camandos disponiveis no `package.json`(npm run debug, npm test, ...) devem ser executados **DENTRO** do container, ou seja, no terminak que aparece após a execução do comando `docker exec` citado anteriormente.

<strong>Atenção:</strong> Caso tenha `MySQL` instalado em seu computador, pare o serviço para não ter conflitos. Em alguns casos o seguinte comando pode resolver: `sudo service mysql stop`.

-----

# Sem Docker

> Instale as dependências [**Caso existam**] com `npm install`
- Para rodar este método você precisa estar com o `node` instalado em seu computador

</br>
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

</br>
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
  </br>
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

</br>
</details>

<details>
<summary><strong>Para começar</strong></summary></br>

- Acesse o terminal da projeto;
- Defina se irá rodar o projeto com ou sem docker;

### Backend:

- Abra o terminal e rode o seguinte comando: `npm run debug` para rodar a aplicação desenvolvida no backend;

> Backend: se certifique que as portas 3000 e 3306 não estejam em uso, para rodar o projeto, caso esteja:

- Verifique se você tem algum container rodando na porta:
    - Utilize esse comando para listar as imagens: `docker ps`
    - Parando o container: `docker stop "ID_CONTAINER"`
    - Você pode limpar as imagens em cache:
        - Utilize este comando: `docker images prune -a`

- Para rodar os testes no backend:
    - Utilize o seguinte comando: `npm run test:mocha`

### Frontend:

- Agora em um segundo terminal, acesse a pasta frontend:
    - Utilize o seguinte comando: `cd frontend`
- Após acessar, inicie a aplicação de frontend:
    - Utilize o seguinte comando: `npm start`

### Testando a aplicação:

- Acesse as rotas `frontend/src/routes`
- Acesse a seguintes rotas para:
    - Listar os ativos por cliente: `/ativos/clientes/{cod-cliente}`
    - Consultar o ativo pelo código: `/ativos/{cod-ativo}`
    - Consultar a conta do cliente: `/conta/{cod-cliente}`
    - Efetuar uma compra de ativo: `/investimentos/comprar`
    - Efetuar uma venda de ativo: `/investimentos/vender`

</br>
</details>

<details>
<summary><strong>Links</strong></summary></br>

 - Referências: </br>

    - [sequelize](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
    - [stackoverflow](https://stackoverflow.com/questions/29233896/sequelize-table-without-column-id)
    - [npm cors](https://www.npmjs.com/package/cors)
    - [eslintrc](https://github.com/diego3g/node-microservices-ddd/blob/master/packages/server/.eslintrc.json )
    - [axios](https://github.com/axios/axios)
    - [supertest](https://github.com/visionmedia/supertest)
    - [mocha-and-chai](https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai)
    - [npm nyc](https://www.npmjs.com/package/nyc)
    - [redux-thunk](https://www.npmjs.com/package/redux-thunk)
    - [redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)
</br>
</details>
