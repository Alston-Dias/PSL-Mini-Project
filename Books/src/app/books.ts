export class Book{
    id:number;
    title: string;
    name:string;
    imgPath:string;
    category:string;
    isRented: boolean;
    constructor(id:number,title:string,name:string,category:string,imgPath:string,isRented: boolean){
        this.id = id;
        this.title= title;
        this.name = name;
        this.imgPath = imgPath;
        this.isRented = isRented;
        this.category = category;
    }
    getId():number{
        return this.id;
    }
    
}