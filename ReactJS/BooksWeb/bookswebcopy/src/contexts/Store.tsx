interface Store {
    books: any[],
    registereduser: any,
    loggedInUser: any,
    BookDetails: any,
    SearchedBooks: any
}
export const store: Store = {
    books: [],
    registereduser: {},
    loggedInUser: {},
    BookDetails: {},
    SearchedBooks: []

}
