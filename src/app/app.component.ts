import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import { ListComponent } from './components/list/list.component'
=======
>>>>>>> f9f5c9d (initial commit)

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [
    RouterOutlet, 
    MatSlideToggleModule, 
    NavBarComponent,
    ListComponent
  ],
=======
  imports: [RouterOutlet],
>>>>>>> f9f5c9d (initial commit)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-golook';
}
