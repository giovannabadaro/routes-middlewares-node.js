

## Rotas e middlewares em node js :rocket:

Este repositório tem como objetivo expor os conceitos iniciais em node.js sobre rotas e middlewares

**Bibliotecas utilizadas**
- Express


### Rotas :metal:
São utilizadas rotas com os seguintes métodos HTTP: 

- GET
- POST
- UPDATE
- DELETE

### Como rodar o projeto :round_pushpin:
1. Certifique-se que possui o node devidamente instalado em sua máquina
2. Clone o projeto
3. execute o comando abaixo na pasta do projeto

      `$ yarn install `

### Como funciona :new_moon_with_face:
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
