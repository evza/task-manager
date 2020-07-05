import { Component } from '@angular/core'; // это контролер всего приложения

// тут пишем архитектуру приложения ------------------------------
@Component({ // в декоратор добавляет свойства или поведение
  selector: 'app-root', // название тега
  templateUrl: './app.component.html', // нзвание(адресс) базового шаблона
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Персональный органайзер'; // имя свойства контроллера
}
