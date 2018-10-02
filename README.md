# Building JSON Api with Node and Mongo
This is a simple demonstrate how to build api using Node and Mongo.
In this I will be building A simple todo api.

## Defining Routes
- **GET** `/api/todos` List All Todos
- **POST** `api/todos` Create New Todo
- **GET** `api/todos/todoId` Retrieve a Todo
- **UPDATE** `api/todos/todoId` Update Todo
- **DELETE** `api/todos/todoId` Delete a Todo

## MongoDB Schema (Structing Todo Data)
- name `(type:string)`
- complete `(type:Boolean)`
- createdDate `(type:Date)`

## Getting Started with installation
- Make sure we have node installed.
- run `npm init` this will initialize.It contains meta data of our project
- install express js using `npm install express`.
- create a main file `touch index.js`.
- set up express in the file
- everything else will be in the `index.js` file
