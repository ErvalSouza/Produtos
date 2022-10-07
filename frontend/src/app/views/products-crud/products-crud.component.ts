import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCrudComponent implements OnInit {

produtos = ["estudar", "cozinhar"]

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate():void{
    this.route.navigateByUrl('products/create')
    console.log("Navegando")
  }

}
