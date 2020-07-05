import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './organizer.service';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
  // заходит весь список задач, выдает запрошенное из Task,
  transform(tasks: Task[], search: string): Task[] {
    if(!search.trim()) {   // trim() - убиает случайные пробелы 
      return tasks;
    }
    return tasks.filter(task => {
      return(task.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    });
  }

}
