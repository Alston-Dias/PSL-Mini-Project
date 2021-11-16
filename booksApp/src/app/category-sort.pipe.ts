import { Pipe, PipeTransform } from "@angular/core";
import { Book } from "./Book";

@Pipe({
    name:'categorysort'
})
export class CategorySortPipe implements PipeTransform{
    transform(books: Book[],sortBook: string): Book[] {
        if (!books || !sortBook){
            return books;
        }
        return books.filter(book =>
            book.title.toLowerCase().indexOf(sortBook.toLowerCase()) !==-1);
            }
}

