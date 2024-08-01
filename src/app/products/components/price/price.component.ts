import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: ``,
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  interval$?: Subscription;

  ngOnInit(): void {
    console.log('Hijo: ngOnInit');

    this.interval$ = interval(1000).subscribe((value) => (this.price = value));
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hijo: ngOnChanges');
    console.log({ changes });
  }
  constructor() {
    console.log('Hijo: constructor');
  }
  ngOnDestroy(): void {
    console.log('Hijo: ngOnDestroy');
    this.interval$?.unsubscribe();
  }
  @Input()
  public price: number = 0;
}
