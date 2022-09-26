import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/productService/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BillService } from 'src/app/service/billService/bill.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ProductService,BillService]
})
export class ArticleComponent implements OnInit {


  article  = {
    name : "",
    description : "",
    image : "",
    amount: 0,
    price: 0,
    code:0
  }

  user = false
  btnAmountColor = "defaul"
  tempAmoutProduct = 0;
  tempProceProduct = 0;
  tempProceProductReal = 0
  alertProdutAmunt = false;
  btnPayment = false;

  object = new Object;

  listProduct : any[] = [];
  constructor(
    private _productService : ProductService, 
    private _router : Router,
    private _billService : BillService,
  ) {
    this.onLoadPage();
   
   }
  
   onLoadPage(){
    this._productService.list().subscribe(
      (data)=>{
        this.listProduct = data
        this.listProduct.map((product)=>{          
          if(product.amount > 5 ){
            product["btnAmountColor"] = "success"; 
          }
          if(product.amount <= 5){            
            product["btnAmountColor"] = "warning";
          }
          if(product.amount <= 1){            
            product["btnAmountColor"] = "danger";           }
          if(product.amount <= 0){           
            product["btnAmountColor"] = "dark"; 
          }
            
        })
      },
      (error)=>{alert("Error en Productos")}  
      )
   }

  ngOnInit(): void {}
  
  formBulder = new FormGroup({
    amount : new FormControl('',[Validators.required]),
  })
  toBuy(data){
    if(!JSON.parse(sessionStorage.getItem("userNow"))){
      this._router.navigate(["/login"])
      this.user = false
    }else{
      this.user = true
      this.article = {
        code: data.code,
        name: data.name,
        description : data.description,
        image: data.image,
        amount: data.amount,
        price : data.price
      }
      this.object={
        description : `${data.name} ${data.description}`
      }
      this.tempAmoutProduct = data.amount;
      this.tempProceProduct = data.price;
      this.tempProceProductReal = data.price
    }
    
  }
  amount(){
    var realPrice = this.tempProceProductReal
    if(this.formBulder.value.amount > 0){
      var price = this.tempProceProduct
      this.tempProceProduct = (price*this.formBulder.value.amount)
      this.btnPayment = true
    }else{
      this.tempProceProduct =  realPrice
      this.btnPayment = false
    }    
    if(this.formBulder.value.amount > this.tempAmoutProduct){
      this.alertProdutAmunt = true;
    }else{
      this.alertProdutAmunt = false;
    }      
  }

  payment(){
    this.object = {
      description : `${this.article.name} ${this.article.description}`,
      amount: this.formBulder.value.amount,
      idUser: JSON.parse(sessionStorage.getItem("userNow")).code,
      price:  this.tempProceProduct,
      idProduct: this.article.code,
    }
   
    this._billService.save(this.object).subscribe(
       (respose)=>{alert("Compra completa")},
       (error)=>{alert("Error")}
      )
    
    var object = {
      code : this.article.code,
      amount : this.article.amount - this.formBulder.value.amount,
      name : this.article.name,
      description : this.article.description,
      image : this.article.image,
      price : this.article.price
    } 
    this._productService.update(object).subscribe(
      (respose)=>{
        this.object = {
          description : `${this.article.name} ${this.article.description}`,
          amount: this.formBulder.value.amount,
          idUser: JSON.parse(sessionStorage.getItem("userNow")).code,
          price:  this.tempProceProduct,
          idProduct: this.article.code,
          image : this.article.image,
        }
        sessionStorage.setItem("payMent",JSON.stringify(this.object))
        this._router.navigate(["/bill/payment"])
      },
      (error)=>{alert("Error")}
     )
  }
}