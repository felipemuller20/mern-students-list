# Boas vindas ao repositório do projeto Students List ✌️

[**Acesse aqui**](https://felipemuller-students-list.surge.sh/).

O **Students List** é um projeto Front-end e Back-end MERN (MongoDB, Express, React e Node) que realiza um CRUD (_Create_, _Read_, _Update_ e _Delete_) de alunos. As informações armazenadas no banco de dados são: nome, telefone, endereço e uma imagem, que pode ser adicionada por meio de um Upload realizado no Front-end.

- Todas as informações dos alunos são armazenadas no banco de dados.
- Acima da lista de alunos há um botão que leva para um formulário para adicionar novos alunos na lista.
- Todas as informações dos alunos podem ser editadas, clicando no botão de edição.
- Qualquer aluno pode ser removido da lista, clicando no botão de exclusão.
- Na listagem dos alunos existem três filtros:
  - Visualizar em ordem alfabética;
  - Visualizar em ordem de criação;
  - Buscar um aluno pelo nome.

Para realizar as operações com o banco de dados, foi utilizado o ODM Mongoose.

Todas as operações do backend foram realizadas utilizando os princípios de uma REST API.

## 👀 Visualização

O _deploy_ da aplicação front-end foi realizado utilizando `surge` e pode ser acessado [nesse link](https://felipemuller-students-list.surge.sh/).

Ao acessar a página, você irá se deparar com um formulário de login. O projeto não armazena as informações de login da pessoa usuária, porém, para _logar_, você precisará informar **qualquer e-mail válido** e **qualquer senha com pelo menos 6 dígitos**.

Exemplo de usuário válido:

```bash
felipe@email.com
123456
```

A API e o banco de dados estão armazenados no [railway](https://astute-silver-production.up.railway.app/students).

## 💻 Executando o projeto localmente

Antes de executar o projeto no seu computador, certifique-se de ter instalado:

- [Node](https://nodejs.org/en/download/) - versão 16 ou superior;
- [MongoDB](https://www.mongodb.com/docs/manual/installation/);
- [NPM](https://www.npmjs.com/) ou outro gerenciador de pacotes da sua preferência.

Clone o repositório com o comando:

```bash
git clone git@github.com:felipemuller20/mern-students-list.git
```

Acesse o diretório criado:

```bash
cd mern-students-list
```

### Executando o servidor local Front-end

Acesse o diretório `frontend`:

```bash
cd frontend
```

Instale as dependências do projeto:

```bash
npm install
```

Se preferir, utilize o Yarn com o seguinte comando:

```bash
yarn install
```

Abra o navegador com o servidor, executando o código:

```bash
npm run dev
```

Esse comando deverá abrir o seu browser já com a aplicação sendo executada. O projeto está configurado para acessar a API que está hospedada no [Railway](https://astute-silver-production.up.railway.app/students). Caso você deseje se conectar com o servidor back-end **local**, altere o valor da constante `URL` que se encontra no diretório `frontend/src/utils/api.js` para `http://localhost:3001` e siga os passos da seção abaixo para executar o servidor back-end localmente.

### Executando o servidor local Back-end

Abra um novo terminal e certifique-se de estar na raiz do projeto clonado anteriormente. Acesse o diretório `backend`:

```bash
cd backend
```

Instale as dependências do projeto:

```bash
npm install
```

Execute o servidor Back-end:

```bash
npm start
```

Executando todos os comandos acima, por padrão você acessará o servidor local `localhost:3001` e o servidor mongoDB `mongodb://localhost:27017/StudentsList`. Caso necessite acessar por uma porta diferente, ou alterar as credenciais do banco de dados, você pode criar um arquivo `.env` e adicionar suas credenciais. Utilize o arquivo `.env-example` como guia para nomear suas variáveis.

## 🔧 Executando os testes da aplicação

Para executar os testes da aplicação, certifique-se de estar no diretório `backend` ou `frontend` e execute o comando abaixo:

```bash
npm rum test
```

Para os testes de backend foram utilizadas as bibliotecas `chai` e `mocha`. Para o frontend, foram utilizadas `vitest` e `React Testing Library`.

## Melhorias futuras

Os pontos de melhoria do projeto que estão mapeados e poderão ser desenvolvidos no futuro são:

- Utilizar o JWT para autenticar pessoas usuárias, liberando Edição, Criação e Exclusão de alunos apenas para administradores;
- Adicionar mais validações para os campos de informações dos alunos;
- Adicionar mais informações de cada aluno no formulário e banco de dados, adicionando um página front-end contendo os detalhes do aluno pesquisado;
- Aumentar a cobertura dos testes.

## Principais tecnologias utilizadas

- React.js;
- Vite;
- Vitest;
- React Testing Library;
- Axios;
- React Router Dom;
- Context API;
- CSS;
- Node.js;
- Express;
- Mocha;
- Chai;
- Mongo;
- Mongoose;
- ESLint.
