import { Pipe, PipeTransform } from "@angular/core";
import { Book } from "../Book";

@Pipe({
    name:'bookFilter'
})
export class BookFilterPipe implements PipeTransform{
    transform(books: Book[],searchBook: string): Book[] {
if (!books || !searchBook){
    return books;
}
return books.filter(book =>
    book.title.toLowerCase().indexOf(searchBook.toLowerCase()) !==-1);
    }
}