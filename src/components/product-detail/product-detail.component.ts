import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(data => this.product = data);
  }

  featureKeys(): string[] {
    return this.product ? Object.keys(this.product.featureDescMap) : [];
  }

  buyNow(){
    
  }
  
}
