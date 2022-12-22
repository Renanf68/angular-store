import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css'],
})
export class CartFormComponent implements OnInit {
  full_name: string = '';
  address: string = '';
  credit_card: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    // redirect to success page
    console.log('Submit');
  }
}
