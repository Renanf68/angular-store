import { Product, ProductProps } from 'src/app/models/Product';

export class ProductMapper {
  static toRaw(product: Product) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      url: product.url,
    };
  }
  static toDomain(raw: ProductProps): Product {
    return new Product(
      {
        name: raw.name,
        description: raw.description,
        price: raw.price,
        url: raw.url,
        quantity: raw.quantity,
      },
      raw.id
    );
  }
}
