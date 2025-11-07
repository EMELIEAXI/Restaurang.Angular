import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-menu-item.html',
  styleUrls: ['./navbar-menu-item.css']
})
export class NavbarMenuItem {
  @Input() text!: string;
  @Input() href!: string;
}
