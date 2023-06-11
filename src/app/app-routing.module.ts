import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CompletedComponent } from './completed/completed.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'task',component:TaskComponent},
  {path: 'todolist',component:TodolistComponent},
  {path: 'completed',component:CompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
