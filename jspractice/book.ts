export class book{
    id:number;
    title:string;
    author:string;
    price:number;
    rating:number;
    details:string;
    constructor(id:number,title:string,author:string,price:number,rating:number,details:string){
           this.id=id;
           this.title=title;
           this.author=author;
           this.price=price;
           this.rating=rating;
           this.details=details;
    }
    getId(){
        return this.id;
    }
    setId(id:number){
         this.id=id;
    }
    getTitle(){
        return this.title;
    }
    setTitle(title:string){
        this.title=title;
    }
    getAuthor(){
        return this.author;
    }
    setAuthor(author:string){
        this.author=author;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price:number){
        this.price=price;
    }
    getRating(){
        return this.rating;
    }
    setRating(rating:number){
        this.rating=rating;
    }
    getDetails(){
        return this.details;
    }
    setDetails(details:string){
        this.details=details;
    }
}