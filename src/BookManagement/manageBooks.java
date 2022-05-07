package BookManagement;

import java.util.Scanner;

public class manageBooks {
	static Scanner scn=new Scanner(System.in);

	public static void main(String[] args) {
		
		book[] bookObj= {};
		boolean condition = true;
		 do
	     {
	    	 int choice = getMainMenu();
	    	 switch(choice) {
	    	 case 1:
	    		 bookObj=addBooks(bookObj);
	    		 display(bookObj);
	    		 break;
	    	 case 2:
	    		 if(!(isEmpty(bookObj))) {
	        		 displayDetails(searchBook(bookObj));
	    		 }
	    		 else 
	    		 {
	    			 System.out.println("Please add Books into Library!");
	    		 }
	    		 break;
	    	 case 3:
	    		 if(!(isEmpty(bookObj))) 
	    		 {
	        		 display(sortBooksByAuthor(bookObj));
	        	 }
	    		 else 
	    		 {
	    			 System.out.println("Please add Books into the Library!");
	    		 }
	    		 break;
	    	 case 4:
	    		 if(!(isEmpty(bookObj))) {
	        		 displayDetails(updateCopies(bookObj));
	    		 }
	    		 else {
	    			 System.out.println("Please add Books into the Library!");
	    		 }
	    		 break;
	    	 case 5:
	    		 System.out.println("EXITED!");
	    		 condition= false;
	    		 break;
	    	 default:
	    		 System.out.println("Please enter the valid choice! ");

	    	 }
	     }while(condition);
	    	
	}
	
	//Main Menu
		private static int getMainMenu() {
			
			System.out.println("**************************Main Menu**********************");
			System.out.println("Enter the choice :");
			System.out.println("1.Add book details and display all book details "
					+ "present in the system.");
			System.out.println("2. Search for a book by its name and display book name "
					+ "in such"
					+ "\n a way that even positioned characters should be replaced by its "
					+ "next character with uppercase.");
			System.out.println("3.Sort and display books by its author name.");
	        System.out.println("4.Update number of copies of a book by its book id.");
	        System.out.println("5.EXIT");
	        int choice =scn.nextInt();
	        return choice;
		}
		
		// Validate Integer
		public static int validateInteger(int num) {
			if(num < 0) {
				System.out.println("Enter the valid Integer!");
				num=scn.nextInt();
				return validateInteger(num);
			}
			return num;
		}
		
		//Validate String
	    public static String validateString(String string) {
	    	for(int i=0;i<string.length();i++) {
	    		char character=string.charAt(i);
	    		if(!((character >= 'A' && character <='Z') ||
	    				(character >='a' && character <='z'))) {
	    			System.out.println("Enter the valid string!");
	    			string=scn.next();
	    			return validateString(string);
	    		}
	    	}
	    	return string;
	    }
	    
	   //Add Books 
		public static book[] addBooks(book[] bookObj) {
	  		
  		    System.out.println("Enter the number books want to add:");
  		    int num=scn.nextInt();
  		    int temp= bookObj.length+num;
  			book[] bookObj2= new book[temp];
  			int i=0;
  			for(i=0;i<bookObj.length;i++) {
  				bookObj2[i]=bookObj[i];
  			}
  			
  			for(int j=i;j<temp;j++) {
  			System.out.println("Enter the book Id: ");
  			int id=scn.nextInt();
  			System.out.println("Enter the book Name:");
  			String name=scn.next();
  			System.out.println("Enter the Publisher name: ");
  			String publisher= scn.next();
  			System.out.println("Enter the Author name:");
  			String author = scn.next();
  			System.out.println("Enter number of copies of book:");
  			int copies=scn.nextInt();
  			bookObj2[j]= new book(validateInteger(id),validateString(name),
  					validateString(publisher),validateString(author),validateInteger(copies));
  
  			System.out.println("*************************************");
  			
  			}
  			return bookObj2;
  		}
	    
	 // Displaying Books
	  	public static void display(book[] bookObj) {
	  		for(int i=0;i<bookObj.length;i++) {
	  			System.out.println("Book ID:  "+bookObj[i].getBookID());
	  			System.out.println("Book Name:  "+bookObj[i].getBookName());
	  			System.out.println("Publisher:  "+bookObj[i].getPublisher());
	  			System.out.println("Book Author:  "+bookObj[i].getBookAuthor());
	  			System.out.println("Book Copies:  "+bookObj[i].getCopies());
	  			System.out.println("*******************************************"
	  					+ "*****************");
	  			
	  		}
	  	}
	  //Displaying particular book details
	  	private static void displayDetails(book bookObj) {
	  		System.out.println("Book ID:  "+bookObj.getBookID());
  			System.out.println("Book Name:  "+bookObj.getBookName());
  			System.out.println("Publisher:  "+bookObj.getPublisher());
  			System.out.println("Book Author:  "+bookObj.getBookAuthor());
  			System.out.println("Book Copies:  "+bookObj.getCopies());
  			System.out.println("************************************************************");
	  	}
	  	
	  	
	  //Search for a Book
	  private static book searchBook(book[] bookObj) {
		  System.out.println("Enter the name of the book to search:");
		  String name= scn.next();
		  book obj=new book();
		  for(int i=0;i<bookObj.length;i++) {
			  if(bookObj[i].getBookName().equals(name)) {
				  obj=bookObj[i];
				  String s="";
				  for(int j=0;j<name.length();j++) {
					  if(j%2 !=0) {
						  char ch=' ';
						  if (name.charAt(j) >= 'a' && name.charAt(j) <= 'z') {
				                ch = (char)(name.charAt(j) - 32);
				                if(ch == 'Z') {
				                	ch='A';
				                }
				                else {
				                ch=(char) (ch+1);
				                }
				            }
						  else {
							  if (name.charAt(j) >= 'A' && name.charAt(j) <= 'Z') {
				                ch = (char)(name.charAt(j));
				                if(ch =='Z') {
				                	ch='A';
				                }
				                else {
				                	ch=(char) (ch+1);
				                }
							  }
				            }
				            
				       s+=ch;
					  }
					  else {
						  s+=name.charAt(j);
					  }
				  }
				  obj.setBookName(s);
			  }
		  
	  }
		  return obj;
	  }
	  
	  //Sort and Display Books By Author Name
	  	private static book[] sortBooksByAuthor(book[] bookObj) {
	  		book[] bookObj2=new book[bookObj.length];
	  		for(int i=0;i<bookObj.length;i++) { 
	  			bookObj2[i]=bookObj[i];
	  		}
	  			for(int i=0;i<bookObj2.length-1;i++) {
	  			for(int j=i+1;j<bookObj2.length;j++) {
	  				if(bookObj2[i].getBookAuthor().compareTo(bookObj2[j].getBookAuthor()) >0)
	  				{
	  					book temp = bookObj2[i];
	  					bookObj2[i] = bookObj2[j];
	  					bookObj2[j] = temp;
	  				}
	  			}
	  		}
	  		return bookObj2;
	  	}

	 // Update the Copies of a Particular Book
	  	public static book updateCopies(book[] bookObj) {
	  		System.out.println("Enter the id of the book to update copies ");
	  		int id=scn.nextInt();
	  		int i;
	  		for(i=0;i<bookObj.length;i++) {
	  			if(bookObj[i].getBookID() == id) {
	  			System.out.println("Enter the number of copies to update");
	  			int copies = scn.nextInt();
	  			bookObj[i].setCopies(copies);
	  			break;	
	  		}
	  	}
	  		return bookObj[i];
	}
	  	
	  //To check the Object array is null or not
	    public static boolean isEmpty(book[] bookObj) {
	    	if(bookObj.length !=0) {
	    		return false;
	    	}
	    	else {
	    		return true;
	    	}
	    }
}
