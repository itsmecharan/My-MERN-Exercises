//Menu driven program for mobile details using mobile class
/*
 * Psuodcode
 * 1.Get the size of Object array to store products from the user.
 * 2.Implement menu driven code using do while loop and menu driven method.
 * 3.Invoke add mobiles method  for adding mobiles.
 * 4.Invoke display method to display mobile object details.
 * 5. Invoke SortMobilesByModel method to sort and get the mobiles detail based on model.
 * 6.Invoke UpdatePrice method to update mobile price based on mobile id.
 * 8.Invoke delete method to delete mobile objects.
 * 9.Invoke additional methods to validate user input.
 */

package MobileStore;
import java.util.Scanner;

import InventoryManagement.ProductDetails;

public class Manage_Mobiles {
	static Scanner sc=new Scanner(System.in);

	public static void main(String[] args) {
		Mobile[] mobileObj= {};
		boolean condition = true;
		do {
			int choice =getMainMenu();
			switch(choice) {
			case 1:
				
				mobileObj=addMobile(mobileObj);
				display(mobileObj);
				break;
			case 2:
				if(!isEmpty(mobileObj)) {
				mobileObj=sortMobilesByModel(mobileObj);
				}
				else {
					System.out.println("Please Add Mobiles into the Store!");
				}
				
				break;
			case 3:
				if(!isEmpty(mobileObj)) {
				mobileObj=updatePrice(mobileObj);
				}
				else {
					System.out.println("Please Add Mobiles into the Store!");
				}
				break;
			case 4:
				if(!isEmpty(mobileObj)) {
				mobileObj=deleteDetail(mobileObj);
				}
				else {
					System.out.println("Please Add Mobiles into the Store!");
				}
				break;
			case 5:
				System.out.println("EXITED!");
				condition=false;
				break;
			default:
				System.out.println("Please enter the valid choice");
			}
		}while(condition);
	}
	
	//Menu Display
	public static int getMainMenu() {
		System.out.println("************************Main Menu**********************");
		System.out.println("Enter the Choice");
		System.out.println("1.Add mobile details to the system and "
				+ "display all mobile details present in the system.");
		System.out.println("2.Sort all the mobiles based on the model and display the details!");
		System.out.println("3.Update price for given mobile id and display the details.");
		System.out.println("4.Delete mobile details for given mobile id");
		System.out.println("5.Exit");
		int choice=sc.nextInt();
		return choice;
	}
	
	
	//validate Integer
	public static int validateInteger(int num) {
		if(num < 0) {
			System.out.println("enter valid id");
			num=sc.nextInt();
			return validateInteger(num);
		}
		return num;
	}
	
	//validate string
    public static String validateString(String string) {
    	for(int i=0;i<string.length();i++) {
    		char character=string.charAt(i);
    		if(!((character >= 'A' && character <='Z') ||
    				(character >='a' && character <='z'))) {
    			System.out.println("Enter the correct string for mobile model:");
    			string=sc.next();
    			return validateString(string);
    		}
    	}
    	return string;
    }
    
    //Validate Double 
  	public static double validateDouble(double num) {
  		if(num < 0) {
  			System.out.println("enter valid Price Value");
  			num=sc.nextDouble();
  			return validateDouble(num);
  		}
  		return num;
  	}
  	
  	//Validate Date
  	public static String validateDate(String date) {
  		for(int i=0;i<date.length();i++) {
  			if(i==0 || i==1 || i==3 || i==4 || i==6 || i==7 || i==8 || i==9) {
  				if(!(date.charAt(i)>='0' && date.charAt(i)<='9')) {
  					System.out.println("Invalid date format! Please enter the date again:");
  					date=sc.next();
  					return validateDate(date);
  				}
  			}
  			if(i==2 || i==5) {
  				if(!(date.charAt(i)=='-')) {
  					System.out.println("Invalid date format! Please enter the date again:");
  					date=sc.next();
  					return validateDate(date);
  				}
  			}
  		}
  		return date;
  		
  	}
    
    //Add mobiles to Mobile Store
    public static Mobile[] addMobile(Mobile[] mobileObj) {
    	System.out.println("Enter the number of mobiles want to add to Store:");
		    int num=sc.nextInt();
		    int temp= mobileObj.length+num;
			Mobile[] mobileObj2= new Mobile[temp];
			int i=0;
			for(i=0;i<mobileObj.length;i++) {
  				mobileObj2[i]=mobileObj[i];
  			}
			for(int j=i;j<temp;j++) {
    		System.out.println("Enter the mobile id:");
    		int id=sc.nextInt();
    		System.out.println("Enter the mobile model:");
    		String model=sc.next();
    		System.out.println("enter the mobile price:");
    		double price=sc.nextDouble();
    		System.out.println("Enter the mobile Date of Manufacture(dd-mm-yyyy):");
    		String date=sc.next();
    		mobileObj2[j]=new Mobile(validateInteger(id),validateString(model),
    				validateDouble(price),validateDate(date));
    		System.out.println("**********************************************");
    	}
			return mobileObj2;
    }
    
    //Display mobile details
    public static void display(Mobile[] mobileObj) {
    	for(int i=0;i<mobileObj.length;i++) {
    		System.out.println("Mobile Id:  "+mobileObj[i].getId());
    		System.out.println("Mobile Model:  "+mobileObj[i].getModel());
    		System.out.println("Mobile Price:  "+mobileObj[i].getPrice());
    		System.out.println("Mobile Date of Manufacture:  "+mobileObj[i].getDateOfManufacture());
    		System.out.println("********************************************************");
    	}
    }
    
    //Sorting Mobiles based on model name by bubble sort
    public static Mobile[] sortMobilesByModel(Mobile[] mobileObj) {
    	Mobile[] mobileObj2=new Mobile[mobileObj.length];
    			for(int i=0;i<mobileObj.length;i++) { 
    	  			mobileObj2[i]=mobileObj[i];
    	  		}
    	for(int a = 0; a <mobileObj2.length - 1; a++)
	      {
	         for(int b = a + 1; b < mobileObj2.length; b++)
	         {
	            if(mobileObj2[a].getModel().compareTo(mobileObj2[b].getModel()) > 0)
	            {
	               Mobile temp = mobileObj2[a];
	               mobileObj2[a] = mobileObj2[b];
	               mobileObj2[b] = temp;
	            }
	         }
				
	      }
    	display(mobileObj2);
    	return mobileObj;
    }
    
    //Update price for given mobile id
    public static Mobile[] updatePrice(Mobile[] mobileObj) {
    	System.out.println("Enter the id of the mobile to update Price");
    	int id=sc.nextInt();
    	for(int i=0;i<mobileObj.length;i++) {
    		if(mobileObj[i].getId() == id) {
    			System.out.println("Enter price to update: ");
    			double price=sc.nextDouble();
    			mobileObj[i].setPrice(price);
    			
    			displayDetails(mobileObj[i]);
    			break;
    		}
    	}
    	return mobileObj;
    }
    
    //Displaying updated mobiles detail
    public static void  displayDetails(Mobile mobileObj) {
    	System.out.println("Updated Mobile Details");
    	System.out.println("Mobile Id:  "+mobileObj.getId());
    	System.out.println("Mobile Model:  "+mobileObj.getModel());
    	System.out.println("Mobile Price:  "+mobileObj.getPrice());
    	System.out.println("Mobile Manufacture Date:  "+mobileObj.getDateOfManufacture());
    	
    }
    
    // Deleting Mobile Details
    public static Mobile[] deleteDetail(Mobile[] mobileObj) {
    	System.out.println("Enter the Mobile Id to delete:");
  		int id = sc.nextInt();
  		Mobile[] mobileObj2=new Mobile[mobileObj.length-1];
  		int count=0;
  		for(int i=0;i<mobileObj.length;i++) {
  			if(mobileObj[i].getId() != id) {
  				mobileObj2[count++]=mobileObj[i];
  			}
  			else {
  				displayDetails(mobileObj[i]);
  			}
  		}
  		return mobileObj2;
    }
    
    //to check Object array is null or not
    public static boolean isEmpty(Mobile[] mobileObj) {
    	if(mobileObj[0]!=null) {
    		return false;
    	}
    	else {
    		return true;
    	}
    }
}
