const express = require('express');
const { uuid } = require('uuidv4')

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
  return response.json(projects);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;
  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(project => project.id == id);
  if (projectIndex < 0) {
    return response.status(400).json({ error: 'project not found' })
  }
  const  project  = {
    id,
    title,
    owner,
  };

  /* a variável abaixo recebe o body Json declarado acima que foi enviado na 
  atualização feita pelo cliente */
  projects[projectIndex] = project;


  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

 /* o método abaixo seleciona o index que foi obtido pela variável acima
  a variável acima pega o id pelo parametro da URL */
  const projectIndex = projects.findIndex(project => project.id == id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'project not found' })
  }

  projects.splice(projectIndex, 1);

 /*  quando o conteúdo não tem uma RTCIceTransportStateChangedEvent, é recomendável 
  retornar uma resposta com o status 204, (como feito abaixo) */
  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('back-end started!');
}); 