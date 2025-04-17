import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  productName: string;
  price: number;
  seller: Seller;
  imageUrl:string;
  rating:number;
  featureDescMap: {
    [key: string]: string;
  }
}

export interface Seller {
  sellerName: string;
  gender: string;
  married: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8099';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/product`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/product/by-id`, {
      params: { id: id.toString() }
    });
  }
}
