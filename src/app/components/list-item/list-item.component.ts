import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  jobPosition = 'Software Developer';
  company = '';
  updateTitle(position: string) {
    this.jobPosition = position
  }
}
