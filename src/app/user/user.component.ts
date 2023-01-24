import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductSerService} from "../services/product-ser.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  //cette zone pour déclarer les variabes
  name = "bar9alll ! ";
  location = "maroc";
  status = "activé";
  tablefruit : any = [];
  //table : any = [];

  constructor(private router : Router,  private productservice : ProductSerService ) {
  }

  ngOnInit(): void {
    this.getTableFruits();
  }
//dans cette zone pour déclarer les functions
  getStatus(){
    return this.status;
  }

  getMessage(){
    console.log("My new message !");
  }
  getWakhsas(){
    console.log("wakhsas")
  }
  goToRegister(){
    this.router.navigate(["/register"])
  }
  getTableFruits(){
    this.tablefruit = this.productservice.productTable;
  }

}
