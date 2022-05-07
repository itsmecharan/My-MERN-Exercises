package BookManagement;

public class book {
private int bookID;
private String bookName;
private String publisher;
private String bookAuthor;
private int copies;
 public book() {
	 super();
 }
 public book(int bookID, String bookName, String publisher, String bookAuthor, int copies) 
 {
		super();
		this.bookID = bookID;
		this.bookName = bookName;
		this.publisher = publisher;
		this.bookAuthor = bookAuthor;
		this.copies = copies;
	}
public int getBookID() {
	return bookID;
}
public void setBookID(int bookID) {
	this.bookID = bookID;
}
public String getBookName() {
	return bookName;
}
public void setBookName(String bookName) {
	this.bookName = bookName;
}
public String getPublisher() {
	return publisher;
}
public void setPublisher(String publisher) {
	this.publisher = publisher;
}
public String getBookAuthor() {
	return bookAuthor;
}
public void setBookAuthor(String bookAuthor) {
	this.bookAuthor = bookAuthor;
}
public int getCopies() {
	return copies;
}
public void setCopies(int copies) {
	this.copies = copies;
}

 
}
