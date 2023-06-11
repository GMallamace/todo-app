import { Component, OnInit } from '@angular/core';
import { Todo } from '../service/todo';
import { TodoClass } from '../service/todo-class';
import { TodosService } from '../service/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
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
      this.arrayTodo = response.filter(element => element.completed);
    });
  }

  remove(id?: number) {
    this.ServiceClass.removeToDo(id).then(response => {
      this.gettodo();
    });
  }
}
