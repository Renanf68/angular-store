import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css'],
})
export class CartFormComponent implements OnInit {
  @Output() onSubmitOrder: EventEmitter<string> = new EventEmitter();
  full_name: string = '';
  address: string = '';
  credit_card: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.onSubmitOrder.emit(this.full_name);
  }
}
