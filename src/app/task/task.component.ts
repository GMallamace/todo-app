import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../service/todo';
import { TodoClass } from '../service/todo-class';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  arrayTodo: Todo[] = [];
  todo: TodoClass = new TodoClass('', false);
  isLoading: boolean = true;

  constructor(private router: Router, private ServiceClass: TodosService) {}

  ngOnInit() {
    setTimeout(() => {
      this.getTodos();
      this.isLoading = false;
    }, 2000);
  }

  create() {
    this.ServiceClass.addTodo(this.todo);
  }

  getTodos() {
    this.ServiceClass.getTodos().then((res) => {
      this.arrayTodo = res;
    });
  }
}


