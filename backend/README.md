# Projeto Ticket Support

<p align="left">API para gerenciar ticket de suporte técnico, permitindo criar um ticket solicitando suporte, atualizando as informações do ticket, listar os tickets podendo filtrar pelo status e atualizando o status de um ticket fechado.</p>

## Estrutura do Projeto

```
├───controllers
│   └──tickets
│     ├── create.js
│     ├── index.js
│     ├── remove.js
│     ├── update.js
│     └── updateStatus.js
├───database
│   ├── database.js
│   └── db.json
├───middleware
│   ├── jsonHandler.js
│   └── routeHandler.js
├───routes
│   ├── index.js
│   └── ticket.js
├───routes
│   ├── extractQueryParams.js
│   └── parseRoutePath.js
└─── server.js
```

## Endpoints

### POST `/tickets` Criar ticket
```
POST http://localhost:3333/tickets
Content-Type: application/json

{
  "equipment": "equipment",
  "description": "description",
  "user_name": "name"
}
```
### GET `/tickets` Listar ticket
```
POST http://localhost:3333/tickets
```
### GET `/tickets` Listar com parâmetros "open || closed"
```
POST http://localhost:3333/tickets?status=closed
```
### PUT `/tickets/{id}` Atualizar ticket
```
PUT http://localhost:3333/tickets/{id}
Content-Type: application/json

{
  "equipment": "equipment",
  "description": "description"
}
```
### PATCH `/tickets/{id}/close` Encerrar um ticket
```
PATCH {{baseUrl}}/tickets/{id}/close
Content-Type: application/json

{
  "solution": "solution"
}
```
### DELETE `/tickets/{id}` Deletar um ticket
```
DELETE http://localhost:3333/tickets/{id}
```

# Instalação

<p align="left">Clone o repositório.</p>

```
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_DIRETORIO>
```

## Uso

Inicie o servidor:

```
pnpm dev
```

O servidor estará disponível em `http://localhost:3333`.


## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
