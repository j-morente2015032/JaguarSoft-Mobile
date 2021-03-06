import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { InvoiceService } from '../../../../app/service/invoice.service';
import { ProductService } from '../../../../app/service/product.service';

//JQUERY
declare var $:any;

@Component({
  selector: 'product-invoice',
  templateUrl: 'product-invoice.html'
})
export class ProductsInvoicePage {
  private products:any[] = [];
  private p:any[] = [];
  private parameter:any;
  private search:any;
  private total:any;
  private username;
  private nit;
  private email;
  private address;
  
  constructor(
    public navCtrl: NavController,
    public invoiceService: InvoiceService,
    public pService: ProductService,
    public loading: LoadingController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public toast: ToastController
  ) {
    this.loadAll()
    this.parameter = this.navParams.get('parameter');
    this.username = localStorage.getItem('username')
    this.nit = localStorage.getItem('nit')
    this.email = localStorage.getItem('email')
    this.address = localStorage.getItem('address')

    console.log(this.parameter)
    
    setTimeout(() => {
        this.loadAllProduct(this.parameter)
        setTimeout(() => {
          this.calcTotal();
        }, 500);        
      }, 500);
  }

  public loadAll() {
    this.pService.getAll()
    .then(res => {
      this.p = res.product;
      console.log(this.p);
    }).catch(error => {
      console.log(error)
    })
  }

  public loadAllProduct(id:any) {
    this.invoiceService.getLines(id)
    .then(res => {
      for(let x of res.lines) {
        console.log(x.product_id)
        console.log(this.returnNameProduct(x.product_id))
        console.log(this.returnNameImage(x.product_id))
        
        
        let l = {
            
            product: this.returnNameProduct(x.product_id),
            image: this.returnNameImage(x.product_id),
            qty: x.qty,
            subtotal: x.subtotal
        }
        this.products.push(l);
        
      }
      console.log(this.products)
    }).catch(error => {
      console.log(error)
    })
  }

  calcTotal() {
    let a:any = 0;
    let b:any = 0;
    for(let x of this.products) {
        a = x.subtotal;
        b += a;
    }
    this.total = parseFloat(b).toFixed(2);
  }

  //BUSCAR USUARIOS
  public searchTable() {
    var value = this.search.toLowerCase();
    $("#myList ion-item").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  }

  //Devolver el Nombre del Usuario
  public returnNameProduct(id:any):any {
    for(var i = 0;i<this.p.length;i++) {
      if(this.p[i].product_id == id) {
        return this.p[i].product_name;
      }
    }
  }

  public returnNameImage(id:any):any {
    for(var i = 0;i<this.p.length;i++) {
      if(this.p[i].product_id == id) {
        return this.p[i].image;
      }
    }
  }

}
