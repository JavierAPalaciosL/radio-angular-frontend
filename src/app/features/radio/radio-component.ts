import {Component, EventEmitter, Input, Output} from '@angular/core';
import Radio from '../../core/models/Radio';

@Component({
  selector: 'app-radio-component',
  standalone: false,
  templateUrl: './radio-component.html',
  styleUrl: './radio-component.css'
})
export class RadioComponent {

  @Input() public radioArray!: Radio[];
  @Output() public radioChange = new EventEmitter<{ nameStation: string, url: string }>();

  playSong(url: string, nameStation: string) {
    this.radioChange.emit({ nameStation: nameStation, url: url });
  }

}
