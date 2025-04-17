import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { Router } from '@angular/router';
import { Observable, Subject} from 'rxjs';
import { takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchTerm: string = '';
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}
  products$!: Observable<Product[]>;
  productList:Product[] = [
    
  ];

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    console.log('Component initialized');
    this.getProducts()
  }

  items = [
    {
      id:1,
      name: 'Dell Inspiron 15',
      price: 55000,
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id:2,
      name: 'HP Pavilion x360',
      price: 62000,
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id:3,
      name: 'Lenovo ThinkPad',
      price: 70000,
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  get filteredItems() {
    return this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToDetail(id:number){
    this.router.navigate(['/product-detail', id]);
  }

  
    getProducts(){
      this.productService.getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (products) => {
          this.productList = products;
          console.log('Fetched products:', products);
        },
        error: (err) => {
          console.error('Failed to fetch products', err);
        }
      });
      console.log(this.productList);
      console.log(this.products$);

  }
}
