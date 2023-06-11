import { Injectable } from '@angular/core';
import { Todo } from './todo'; 

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http: string= 'http://localhost:3002/todos'
  list: Todo []=[];

  constructor (){}
  // Metodo per recuperare tutti i todo
   getTodos(): Promise<Todo[]> {
  return fetch(this.http).then(response=> response.json());
}

// Metodo per aggiungere un nuovo todo
addTodo(todo: Todo): Promise<Todo> {
  return fetch(this.http, {
    method: 'post',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(todo)
  }).then (response=> response.json());
}

// Metodo per rimuovere un todo
removeToDo(id: number = 0): Promise<Todo> {
  return fetch(this.http + '/' + id, {
    method: 'delete'
  }).then(response => response.json());
}

// Metodo per modificare uno stato completato di un todo
changeToDo(element:Todo): Promise<Todo> {
  return fetch (this.http + '/' + element.id, {
    method: 'put',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(element)
  })
  .then(response=>response.json())
}

}