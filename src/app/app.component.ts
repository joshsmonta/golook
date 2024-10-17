import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListComponent } from './components/list/list.component';
import { HorizontalViewComponent } from './components/horizontal-view/horizontal-view.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
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
