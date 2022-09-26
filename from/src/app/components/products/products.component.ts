import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/productService/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductService]
})
export class ProductsComponent implements OnInit {

  color = "success";
  object = new Object;
  listProduct : any[] = [];
  public idProduct:number;
  btn_saveUpdata = false;

  formBulder = new FormGroup({
    name : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
    amount : new FormControl('',[Validators.required]),
    price : new FormControl('',[Validators.required]),
    image : new FormControl('',[Validators.required]),
  })

  constructor(
    private _productService : ProductService,
  ) {
    this._productService.list().subscribe(
      (data)=>{this.listProduct = data},
      (error)=>{        
        alert("Error en Productos")
      }  
      )

   }

  ngOnInit(): void {
  }

  save(){
    console.log(this.formBulder.value)
    this.object={
      name: this.formBulder.value.name,
      description: this.formBulder.value.description,
      amount: this.formBulder.value.amount,
      price: this.formBulder.value.price,
      image: this.formBulder.value.image,	
      state:true
    }
    this._productService.save(this.object).subscribe(
      (respose)=>{alert("Guardado")},
      (error)=>{alert("Error")}  
      )
  }

  updateForm(data) {
    this.btn_saveUpdata = true;
    this.idProduct = data.code
    this.formBulder.controls["name"].setValue(data.name)
    this.formBulder.controls["description"].setValue(data.description)
    this.formBulder.controls["amount"].setValue(data.amount)
    this.formBulder.controls["price"].setValue(data.price)
    this.formBulder.controls["image"].setValue(data.image)
  }
  updateCancel(){
    this.btn_saveUpdata = false;
    this.formBulder.reset();
  }

  update(){
    this.object={
      code:this.idProduct,
      name: this.formBulder.value.name,
      description: this.formBulder.value.description,
      amount: this.formBulder.value.amount,
      price: this.formBulder.value.price,
      image: this.formBulder.value.image,	
      state:true
    }
    this._productService.update(this.object).subscribe(
      (respose)=>{
        alert("Actualizado")
      },
      (error)=>{
        alert("Error")
        console.log(error)
      }
      )
  }
}

