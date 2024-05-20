import { Component } from '@angular/core';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  faDashboard = faDashboard;
  faTable = faTable;
  
  selectedItem: string = '';

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
