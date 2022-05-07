import {book} from './book.js';
export class bookManager{
    addBookArray(){
        let books =[];
        books.push(new book(1,"Orient Express","Agatha Christie",250,7.5,"Book on Crime Mistery"));
        books.push(new book(2,"God Of horror","Ajith Ram",700,8.8,"heights of life"));
        books.push(new book(3, "Two States","Chetan Bhagat",450,9.0,"book on love story"));

        return books;
    }
    searchOnId(books,searchNum){
        let idsearchBooks =[];
        for(let x of books){
            let num=x.id.toString();
            if(num == searchNum){
                idsearchBooks.push(x);
            }
        }
        return idsearchBooks;
    }

    searchByText(books,searchText){
        let SearchedBooks =[];
        let text=searchText.toLowerCase();
        for(let x of books){
            if(x.title.toLowerCase().indexOf(text)  != -1){
                SearchedBooks.push(x);
                continue;
            }
        }
    }
}