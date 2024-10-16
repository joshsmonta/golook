import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-horizontal-view',
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: './horizontal-view.component.html',
  styleUrl: './horizontal-view.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalViewComponent {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}
