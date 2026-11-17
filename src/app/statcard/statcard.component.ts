import { Component, Input } from '@angular/core';
import { IconComponent, IconName } from '../icon/icon.component';

@Component({
  selector: 'app-statcard',
  imports: [IconComponent],
  templateUrl: './statcard.component.html',
  styleUrl: './statcard.component.scss',
})
export class StatcardComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() icon: IconName = 'chart';
  @Input() hint = '';
}
