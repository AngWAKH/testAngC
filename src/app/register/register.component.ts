import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductSerService} from "../services/product-ser.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  firstName = "wakhsas";
  active = true;
  tableFr : any = [];

  //je declare mon tableau :
  dataList = [
    {name : "Abdelaziz", code : 165, country : "Tounsia"},
    {name : "Mohamed", code : 458, country : "Morocco"},
    {name : "Mustapha", code : 165, country : "Algeria"}
  ]

  name = "Abdelilah";

  constructor(private routeer : Router, private productFr : ProductSerService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  goToUser(){
    this.routeer.navigate(["/user"])
  }
  getAllProducts(){
   this.tableFr = this.productFr.productTable;
  }

}
