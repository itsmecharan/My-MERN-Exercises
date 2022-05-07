var book = /** @class */ (function () {
    function book(id, title, author, price, rating, details) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
        this.details = details;
    }
    book.prototype.getId = function () {
        return this.id;
    };
    book.prototype.setId = function (id) {
        this.id = id;
    };
    book.prototype.getTitle = function () {
        return this.title;
    };
    book.prototype.setTitle = function (title) {
        this.title = title;
    };
    book.prototype.getAuthor = function () {
        return this.author;
    };
    book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    book.prototype.getPrice = function () {
        return this.price;
    };
    book.prototype.setPrice = function (price) {
        this.price = price;
    };
    book.prototype.getRating = function () {
        return this.rating;
    };
    book.prototype.setRating = function (rating) {
        this.rating = rating;
    };
    book.prototype.getDetails = function () {
        return this.details;
    };
    book.prototype.setDetails = function (details) {
        this.details = details;
    };
    return book;
}());
