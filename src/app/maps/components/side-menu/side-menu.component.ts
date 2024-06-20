import { Component } from '@angular/core';

interface MenuItem {
  name: string,
  route: string,
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullScreen', name: 'fullcreen' },
    { route: '/maps/zoomRanger', name: 'zoomRange' },
    { route: '/maps/markers', name: 'markers' },
    { route: '/maps/properties', name: 'houses' }

  ]

}
