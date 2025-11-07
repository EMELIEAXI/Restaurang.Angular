import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMenuItem } from '../navbar-menu-item/navbar-menu-item';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarMenuItem],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  openMenu = false;

  menuOptions = [
    { text: 'Hem', icon: 'home', href: '#navbar' },
    { text: 'Om', icon: 'info', href: '#about' },
    { text: 'Tjänster', icon: 'room_service', href: '#work' },
    { text: 'Kontakt', icon: 'phone', href: '#contact' },
    { text: 'Referenser', icon: 'comment', href: '#testimonials' },
  ];

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }
}
