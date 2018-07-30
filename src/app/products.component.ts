import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})

export class ProductsComponent {
    productName = 'A Book';
    products = ['ABook', 'A Tree'];
    isDisabled = true;
    constructor() {
        setTimeout(() => {
            this.isDisabled = false;
        }, 3000);
    }

    onAddProduct() {
        this.products.push(this.productName);
    }

    onRemoveProduct(productName: string) {
        console.log(productName + ' ' + this.products.filter(p => p !== productName) + '\n' + this.products)
        this.products = this.products.filter(p => p !== productName);
    }
}