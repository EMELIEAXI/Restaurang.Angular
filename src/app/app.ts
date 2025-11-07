import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Work } from './work/work';
import { Testimonials } from './testimonials/testimonials';
import { Navbar } from './components/navbar/navbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Navbar, Contact, About, Work, Testimonials],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Restaurang.Angular');
}

