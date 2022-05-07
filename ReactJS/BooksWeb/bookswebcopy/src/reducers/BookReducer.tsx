// import axios from 'axios';
export const BookReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_BOOK': {
            //console.log(action);
            return {
                ...state,
                books: [...state.books, {
                    BookId: action.payload.bookid,
                    BookTitle: action.payload.booktitle,
                    BookAuthor: action.payload.bookauthor,
                    BookRating: action.payload.bookrating,
                    BookPrice: action.payload.bookprice,
                    BookCover: action.payload.bookcover,
                    BookDescription: action.payload.bookdesc
                }
                ]
            }
        }

        case 'DELETE_BOOK': {
            const filteredbooks = [];
            for (let i = 0; i < state.books.length; i++) {
                if (state.books[i].BookId !== action.payload.bookid) {
                    filteredbooks.push(state.books[i])
                }
            }

            return { ...state, books: filteredbooks };
        }
        case 'LOGIN': {
            console.log(action.type);

            const obj = { email: '', token: '' };
            obj.email = action.payload.emailid;
            obj.token = action.payload.token;

            return { ...state, loggedInUser: { ...obj } };
        }
        case 'SIGNUP': {
            console.log(action.type);
            const obj = { username: "", email: "", message: "" }
            obj.username = action.payload.username;
            obj.email = action.payload.emailid;
            obj.message = action.payload.message;
            return {
                ...state, registereduser: { ...obj }
            }
        }
        case 'BOOK_DETAILS': {
            console.log(action.type);
            let book = {};
            for (let i = 0; i < state.books.length; i++) {
                if (state.books[i].BookId === action.payload.bookid) {
                    book = { ...state.books[i] };
                }
            }
            // console.log(book);
            return { ...state, BookDetails: book }
        }
        case 'GET_ALL_BOOKS': {
            console.log(action.type);
            return {
                ...state,
                books: [...state.books, ...action.payload.booksdata]
            }

        }
        case 'SEARCH': {
            console.log(action.type);
            return {
                ...state,
                SearchedBooks: [...action.payload.searchedbooks]
            }

            break;
        }
        case 'RESET': {
            if (action.payload.task === 'books') {
                return {
                    ...state,
                    books: []
                }
            }
            if (action.payload.task === 'loggedInUser') {
                return {
                    ...state,
                    loggedInUser: {}
                }
            }
            if (action.payload.task === 'registereduser') {
                return {
                    ...state,
                    registereduser: {}
                }
            }
            if (action.payload.task === 'SearchedBooks') {
                return {
                    ...state,
                    SearchedBooks: []
                }
            }
            break;
        }
        default:
            return state;
    }
};