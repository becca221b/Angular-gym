import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Client } from './models/client';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sparta Gym';
  
  clienteArray: Client[]= [];

  selectedClient: Client = new Client();

  addOrEdit(){
    if(this.selectedClient.id===0){
      this.selectedClient.id = this.clienteArray.length+1;
      this.clienteArray.push(this.selectedClient);
    }
    
    this.selectedClient = new Client()
  }

  openForEdit(client: Client){
    this.selectedClient= client
  }
  
  delete(){
    if(confirm(`Estás seguro de querer eliminar a ${this.selectedClient.name}`)){
      this.clienteArray = this.clienteArray.filter( x=> x != this.selectedClient);
      this.selectedClient = new Client();
    }
  }
  
}
