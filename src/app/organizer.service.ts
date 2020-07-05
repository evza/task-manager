import { Injectable } from '@angular/core';// импорт библиотеки
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export class Task {
  id: number;
  title: string;
  completed: boolean;
  date?: any; // ? - не обязательное свойства класса
}

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  tasks: Task[] = [];

  constructor(public http: HttpClient) { }

  fetchTasks(): Observable<Task[]>{
    return this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .pipe(map(todos => this.tasks = todos));
  }

  toggle(id: number): void {
    //получили уведомление, что на текущей задаче(по айди) сработал чекбокс
    const k = this.tasks.findIndex(t => t.id === id); 
    //нашли индекс задачи     поменяли значение на противоположное 
    this.tasks[k].completed = !this.tasks[k].completed;  
  }

  remove(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }


}
