import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMenuItem } from './navbar-menu-item';

describe('NavbarMenuItem', () => {
  let component: NavbarMenuItem;
  let fixture: ComponentFixture<NavbarMenuItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarMenuItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMenuItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
