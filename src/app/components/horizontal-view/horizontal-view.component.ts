import {ChangeDetectionStrategy, Component, ViewEncapsulation, effect} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ListComponent } from '../list/list.component';
import { DataService } from '../../services/data.service';
import { CdkDropListGroup, CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-horizontal-view',
  standalone: true,
  imports: [ScrollingModule, ListComponent, CdkDropListGroup, CdkDropList],
  templateUrl: './horizontal-view.component.html',
  styleUrl: './horizontal-view.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalViewComponent {
  data = this.dataService.getDataSignal()

  constructor(private dataService: DataService) {
    console.log(this.data());
    effect(() => {
      console.log('Data updated:', this.data());
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
  lists: any[] = this.data();
}
