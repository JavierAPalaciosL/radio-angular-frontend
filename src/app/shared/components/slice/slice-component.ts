import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-slice-component',
  standalone: false,
  templateUrl: './slice-component.html',
  styleUrl: './slice-component.css'
})
export class SliceComponent {

  @Input() size: number = 0;
  @Input() totalPages: number = 0;
  @Input() slice: number = 1;

  @Output() emitPageNumber:EventEmitter<number> = new EventEmitter<number>();

  sliceAt: number = 0;
  sliceAtFuture: number = this.slice;

  isFinalSlice : boolean = false;
  protected readonly Array = Array;

  referenceButtonId: number = 0;

  previous() {
    if(this.sliceAt != 0){
      this.sliceAt = this.sliceAt - this.slice;
      this.sliceAtFuture = this.sliceAtFuture - this.slice;
    }
  }

  next() {
    if(this.sliceAtFuture < this.totalPages) {
      this.sliceAt = this.sliceAt + this.slice;

      this.sliceAtFuture = this.sliceAtFuture + this.slice;
    }
  }

  changePage(sliceAt: number) {
    this.referenceButtonId = sliceAt;
    this.emitPageNumber.emit(sliceAt);
  }
}
