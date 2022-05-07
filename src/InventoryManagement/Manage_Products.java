//Menu driven Program for Inventory Management System 
/*
 * Pseudo code
 * 1.Get the size of Object array to store products from the user.
 * 2.Implement menu driven code using do while loop and menu driven method.
 * 3.Invoke add products method  for adding products.
 * 4.Invoke display method to display object details.
 * 5.Invoke UpdateQuantity method to update product quantity.
 * 6.Invoke display quantity method to get particular products based on quantity.
 * 7. Invoke Sort products method to sort and get the products detail based on quantity.
 * 8.Invoke delete method to delete products.
 * 9.Invoke additional methods to validate user input.
 */
package InventoryManagement;

import java.util.Scanner;


public class Manage_Products {
     
	static Scanner sc= new Scanner(System.in);
	
	public static void main(String[] args) {
		
     ProductDetails[] productObj= {};
     boolean condition = true;
     do
     {
    	 int choice = getMainMenu();
    	 switch(choice) {
    	 case 1:
    		 productObj=addProduct(productObj);
    		 display(productObj);
    		 break;
    	 case 2:
    		 if(!(isEmpty(productObj))) {
        		 displayDetails(updateQuantity(productObj));
    		 }
    		 else {
    			 System.out.println("Please add products into the inventory!");
    		 }
    		 break;
    	 case 3:
    		 if(!(isEmpty(productObj))) {
    		 displayQuantity(productObj);
    	 }
		 else {
			 System.out.println("Please add products into the inventory!");
		 }
    		 break;
    	 case 4:
    		 if(!(isEmpty(productObj))) {
    		 display(sortProductsByQuantity(productObj));
    	 }
		 else {
			 System.out.println("Please add products into the inventory!");
		 }
    		 break;
    	 case 5:
    		 if(!(isEmpty(productObj))) 
    		 {
   				productObj=delete(productObj);

    		 	}
		 else {
			 System.out.println("Please add products into the inventory!");
		 }
    		 break;
    	 case 6:
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
		System.out.println("1.Add products into inventory.");
		System.out.println("2. Update the quantity of particular product.");
		System.out.println("3.Display products whose quantity is less than provided by user.");
        System.out.println("4.Sort and display the products on the basis of quantity.");
        System.out.println("5.Delete a particular product from the inventory.");
        System.out.println("6.EXIT");
        int choice =sc.nextInt();
        return choice;
	}
	
	// Validate Integer
	public static int validateInteger(int num) {
		if(num < 0) {
			System.out.println("Enter a valid Integer");
			num=sc.nextInt();
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
    			System.out.println("Enter the correct string for Product name:");
    			string=sc.next();
    			return validateString(string);
    		}
    	}
    	return string;
    }
    
  //Validate Double 
  	public static double validateDouble(double num) {
  		if(num < 0) {
  			System.out.println("Enter valid Price Value");
  			num=sc.nextDouble();
  			return validateDouble(num);
  		}
  		return num;
  	}
  	
  //Add products into inventory
  	public static ProductDetails[] addProduct(ProductDetails[] productObj) {
  		
  		    System.out.println("Enter the number products want to add to inventory:");
  		    int num=sc.nextInt();
  		    int temp= productObj.length+num;
  			ProductDetails[] productObj2= new ProductDetails[temp];
  			int i=0;
  			for(i=0;i<productObj.length;i++) {
  				productObj2[i]=productObj[i];
  			}
  			
  			for(int j=i;j<temp;j++) {
  			System.out.println("Enter the Product Id: ");
  			int id=sc.nextInt();
  			System.out.println("Enter the Product Name:");
  			String name=sc.next();
  			System.out.println("Enter the Quantity: ");
  			int quantity= sc.nextInt();
  			System.out.println("Enter the Price per Unit");
  			double pricePerUnit = sc.nextDouble();
  			productObj2[j]= new ProductDetails(validateInteger(id),validateString(name),validateInteger(quantity),
  					validateDouble(pricePerUnit));
  
  			System.out.println("*************************************");
  			
  			}
  			return productObj2;
  		}
  	
  	
  // Displaying Products
  	public static void display(ProductDetails[] productObj) {
  		for(int i=0;i<productObj.length;i++) {
  			System.out.println("ID:  "+productObj[i].getId());
  			System.out.println("Name:  "+productObj[i].getName());
  			System.out.println("Quantity:  "+productObj[i].getQuantity());
  			System.out.println("Price per Unit:  "+productObj[i].getPricePerUnit());
  			System.out.println("************************************************************");
  			
  		}
  	}
  	
  // Update the Quantity of a Particular Product
  	public static ProductDetails updateQuantity(ProductDetails[] productObj) {
  		System.out.println("Enter the id of the product to update quantity ");
  		int id=sc.nextInt();
  		int i;
  		for(i=0;i<productObj.length;i++) {
  			if(productObj[i].getId() == id) {
  			System.out.println("Enter the quantity to update");
  			int newQuantity = sc.nextInt();
  			productObj[i].setQuantity(newQuantity);
  			break;	
  		}
  	}
  		return productObj[i];
}
  	
  	//Displaying particular product details
  	private static void displayDetails(ProductDetails productObj) {
  		System.out.println("ID  "+productObj.getId());
  		System.out.println("Name:  "+productObj.getName());
  		System.out.println("Quantity:  "+productObj.getQuantity());
  		System.out.println("Price per Unit:"+productObj.getPricePerUnit());
  	}
  	
  	// Display products whose quantity is less than provided by user
  	public static ProductDetails[] displayQuantity(ProductDetails[] productObj) {
  		System.out.println("Enter the quantity to check whose quantity is less");
  		int quantity = sc.nextInt();
  		for(int i=0;i<productObj.length;i++) {
  			if(productObj[i].getQuantity() < quantity) {
  				displayDetails(productObj[i]);
  			}
  		}
  		return productObj;
  	}
  	
  	//Sort and Display products based on quantity
  	private static ProductDetails[] sortProductsByQuantity(ProductDetails[] productObj) {
  		ProductDetails[] productObj2=new ProductDetails[productObj.length];
  		for(int i=0;i<productObj.length;i++) { 
  			productObj2[i]=productObj[i];
  		}
  			for(int i=0;i<productObj2.length;i++) {
  			for(int j=i+1;j<productObj2.length;j++) {
  				if(productObj2[i].getQuantity() > productObj2[j].getQuantity()) {
  					ProductDetails temp = productObj2[j];
  					productObj2[j] = productObj2[i];
  					productObj2[i] = temp;
  				}
  			}
  		}
  		return productObj2;
  	}
  	
  	//Delete a particular product from inventory
  	public static ProductDetails[] delete(ProductDetails[] productObj) {
  		System.out.println("Enter the Id to delete product");
  		int id = sc.nextInt();
  		ProductDetails[] productObj2=new ProductDetails[productObj.length-1];
  		int count=0;
  		for(int i=0;i<productObj.length;i++) {
  			if(productObj[i].getId() != id) {
  				productObj2[count++]=productObj[i];
  			}
  			else {
  				displayDetails(productObj[i]);
  			}
  		}
  		return productObj2;
  	}
  	
  	 //to check the Object array is null or not
    public static boolean isEmpty(ProductDetails[] productObj) {
    	if(productObj.length !=0) {
    		return false;
    	}
    	else {
    		return true;
    	}
    }
}

