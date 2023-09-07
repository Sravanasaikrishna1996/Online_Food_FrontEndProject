export class Product {
    name!: string;
    price!: number;
    imageurl!:string;


    constructor(name: string ="", price: number=0, imageurl:string="") {
        this.name = name;
        this.price = price;
        this.imageurl = imageurl;
        
    }
}