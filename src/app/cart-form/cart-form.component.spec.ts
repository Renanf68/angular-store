import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { testDeclarations, testImports } from '../app.component.spec';

import { CartFormComponent } from './cart-form.component';

describe('CartFormComponent', () => {
  let component: CartFormComponent;
  let fixture: ComponentFixture<CartFormComponent>;

  let inputName: DebugElement;
  let inputAddress: DebugElement;
  let inputCreditCard: DebugElement;
  let buttonSubmit: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: testDeclarations,
      imports: testImports,
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        // { provide: ContactService, useValue: mockedService }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CartFormComponent);
    component = fixture.componentInstance;

    inputName = fixture.debugElement.query(By.css('input[name=full_name]'));
    inputAddress = fixture.debugElement.query(By.css('input[name=address]'));
    inputCreditCard = fixture.debugElement.query(
      By.css('input[name=credit_card]')
    );
    buttonSubmit = fixture.debugElement.query(By.css('button[type=submit]'));

    fixture.detectChanges();
  });

  const fillForm = () => {
    inputName.nativeElement.value = 'Fire boy';
    inputName.nativeElement.dispatchEvent(new Event('input'));
    inputAddress.nativeElement.value = 'Av. beira mar, 48';
    inputAddress.nativeElement.dispatchEvent(new Event('input'));
    inputCreditCard.nativeElement.value = '1111111111111111';
    inputCreditCard.nativeElement.dispatchEvent(new Event('input'));
  };

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(inputName).toBeTruthy();
    expect(inputAddress).toBeTruthy();
    expect(inputCreditCard).toBeTruthy();
    expect(buttonSubmit).toBeTruthy();
  });

  it('should initiate with empty inputs', () => {
    expect(inputName.nativeElement.value).toEqual('');
    expect(inputAddress.nativeElement.value).toEqual('');
    expect(inputCreditCard.nativeElement.value).toEqual('');
  });

  it('should initiate with submit button disabled', () => {
    inputName.nativeElement.value = '';
    expect(buttonSubmit.properties['disabled']).toBe(true);
  });

  it('should not be able to submit with invalid data', () => {
    inputName.nativeElement.value = 'F';
    inputName.nativeElement.dispatchEvent(new Event('input'));
    expect(buttonSubmit.properties['disabled']).toBe(true);
  });

  it('should change values when user types on inputs', () => {
    fillForm();
    expect(component.full_name).toEqual('Fire boy');
    expect(component.address).toEqual('Av. beira mar, 48');
    expect(component.credit_card).toEqual('1111111111111111');
  });
  it('should be able to submit valid data', () => {
    spyOn(component.onSubmitOrder, 'emit');
    fillForm();
    expect(buttonSubmit.properties['disabled']).toBe(false);
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', {});
    fixture.detectChanges();
    expect(component.onSubmitOrder.emit).toHaveBeenCalled();
  });
});
