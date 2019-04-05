import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage:string;
    _listFilter: string;

    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value;
        this.filtredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    filtredProducts:IProduct[];
    products: IProduct[] ;


    constructor(private productService: ProductService){

    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filtredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );       
    }

    performFilter(filtrerBy: string): IProduct[] {
        filtrerBy = filtrerBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filtrerBy) !== -1);
    }
      
    onRatingClicked(message: string):void{
        this.pageTitle = 'Product List : ' + message;
    }
}