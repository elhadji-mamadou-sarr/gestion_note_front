import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../sidebar-admin/sidebar-admin.component';


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [SidebarAdminComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})

export class AccueilComponent {

}
