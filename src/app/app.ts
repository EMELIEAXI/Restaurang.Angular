import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact/contact';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contact, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Restaurang.Angular');
}
