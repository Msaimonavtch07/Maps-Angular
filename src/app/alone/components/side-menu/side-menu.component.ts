import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string,
  route: string,
}

@Component({
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullScreen', name: 'fullcreen' },
    { route: '/maps/zoomRanger', name: 'zoomRange' },
    { route: '/maps/markers', name: 'markers' },
    { route: '/maps/properties', name: 'houses' },
    { route: '/alone', name: 'alonePage' },

  ]

}
