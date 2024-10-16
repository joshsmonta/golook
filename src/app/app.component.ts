import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListComponent } from './components/list/list.component';
import { HorizontalViewComponent } from './components/horizontal-view/horizontal-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatSlideToggleModule, 
    NavBarComponent,
    HorizontalViewComponent,
    ListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-golook';
}
