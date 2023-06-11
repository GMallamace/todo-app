import { Component, OnInit } from '@angular/core';
import { Todo } from '../service/todo';
import { TodoClass } from '../service/todo-class';
import { Router } from '@angular/router';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  arrayTodo: Todo[] = [];
  todo: TodoClass = new TodoClass('', false);
  isLoading: boolean = true;

  constructor(private router: Router, private ServiceClass: TodosService) {}

  ngOnInit() {
    setTimeout(() => {
      this.gettodo();
      this.isLoading = false;
    }, 2000); 
  }

  gettodo() {
    this.ServiceClass.getTodos().then(response => {
      this.arrayTodo = response.filter(element => !element.completed);
    });
  }

  change(element: Todo) {
    if (!element.completed) {
      element.completed = true;
      this.ServiceClass.changeToDo(element).then(response => this.gettodo());
    }
  }
}
