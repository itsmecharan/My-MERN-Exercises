import { createContext, useReducer } from 'react';
import { BookReducer } from '../reducers/BookReducer';
import { store } from './Store';

export const BookContext = createContext<any>({});

const BookContextProvider = (props: any) => {
    const [state, dispatch] = useReducer(BookReducer, store);
    return (
        <BookContext.Provider value={{ state, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;