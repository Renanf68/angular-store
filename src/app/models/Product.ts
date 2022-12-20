import { v4 as uuidv4 } from 'uuid';

export interface ProductProps {
  id?: string;
  name: string;
  price: number;
  url: string;
  description: string;
  quantity?: number;
}

export class Product {
  private _id: string;
  private props: ProductProps;

  constructor(props: ProductProps, id?: string) {
    this._id = id ?? uuidv4();
    this.props = props;
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get price() {
    return this.props.price;
  }

  public set price(price: number) {
    this.props.price = price;
  }

  public get description() {
    return this.props.description;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get url() {
    return this.props.url;
  }

  public set url(url: string) {
    this.props.url = url;
  }

  public get quantity() {
    return this.props.quantity;
  }

  public updateQuantity(quantity: number) {
    this.props.quantity = quantity;
  }
}
