import {Component, OnInit} from '@angular/core';
import {ProductSerService} from "../../services/product-ser.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    table : any = [];

  constructor(private productService : ProductSerService) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
  this.table = this.productService.productTable;
  console.log("my product", this.table);

  }

}
