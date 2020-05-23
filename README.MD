

## Rotas e middlewares em node js :rocket:

Este repositório tem como objetivo expor os conceitos iniciais em node.js sobre rotas e middlewares

**Bibliotecas utilizadas**
- Express




### Como rodar o projeto :round_pushpin:
1. Certifique-se que possui o node devidamente instalado em sua máquina
2. Clone o projeto
3. execute o comando abaixo na pasta do projeto

      `$ yarn install `

### Como funciona :new_moon_with_face:
#### Rotas :metal:
São utilizadas rotas com os seguintes métodos HTTP: 

- GET
- POST
- UPDATE
- DELETE
O projeto conta com uma varável que armazena os dados em tempo de execução. Ela é iniciada vazia, como mostrado abaixo, e é modificada através das requisições feitas

```javascript
const projects = [ ];
```
A primeira rota **/projetcs** é utilizando o método POST
```javascript
app.post('/projects', (request, response) => {
  const { title, owner } = request.body;
  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});
```
Como vemos acima, na linha 2, é utilizado desestruturação para capturar os dados vindo da request. E então, a variável const project recebe o ID + os valores enviados pelo cliente. 
Na linha 5, então, com o comando push, adiciona esses valores recebidos da request ao array vazio temporário criado no primeiro exemplo de código.  Essa função retorna um JSON com o valores enviados ao cliente. 

> Para conseguir testar todas as requisições eu utilizei um software chamado **Insomnia**, que pode ser obtido através deste , [Link](https://insomnia.rest/download/core/?&ref=https%3A%2F%2Fwww.google.com%2F/)。

### Middlewares

Interceptador de requisições, ele pode: 
- Interromper totalmente a requisição;
- Alterar dados da requisição;

O formato de um middleware é um função, e que recebe por padrão 3 parâmetros: *request, response e next*. 
> As rotas podem ser consideradas middlewares também

```javascript
function logRequests(request, response, next){
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  return next();
}
```
O middleware acima imprime no terminal em qual rota ele foi utilizado e qual método, em caixa alta. 
##### Como chamar um middleware em um requisição: 

Pode-se utilizar um middleware em todas as requisições, para isso basta utilizar o comando: 

```javascript
app.use(logRequests)
```
ou

Pode-se utilizar o middleware em um requisição específica: 

```javascript
app.post('/projects', logRequests, (request, response) =>
```

> Os middlewares são bem utilizados para validações