import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.css'],
})
export class CheckoutSuccessComponent implements OnInit {
  @Input() consumer: string = '';
  @Input() total: string = '';
  @Output() onOrderComplete: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  completeOrder() {
    this.onOrderComplete.emit();
  }
}
