import { Component} from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  
})
export class ListComponent {
  alumnos=[
    { id: 1, name: 'Kristian', lastname: 'Perez', age: 35, weigth: 80, phone: 3794123123 },
    { id: 2, name: 'Emiliy', lastname: 'Gomez', age: 30, weigth: 60, phone: 3794111222 },
    { id: 3, name: 'Deni', lastname: 'Jimenez', age: 30, weigth: 60, phone: 3794222333 },
  ];
  //ver si hace falta en esta version de Angular 17
  //constructor() {}
}
