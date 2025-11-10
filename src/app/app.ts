import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Work } from './components/work/work';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Navbar, Header, About, Work, Testimonials, Contact, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Restaurang.Angular');
}
