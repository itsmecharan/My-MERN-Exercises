import java.util.Scanner;

//Search fruit in array(Basket) using Binary Search
/*
 * Psudocode
 * 1.Get the user input i.e., Size of array and elements(fruits) into array.
 * 2.Sort the elements in the array using Bubble sort technique.
 * 3.Get the element(string) to search in array from the user.
 * 4.Validate the entered string which should be in lower case alphabetic characters.
 * 5.Implement the binary search logic to search the string in the array.
 * 6.Display the result.
 */
import java.util.Scanner;
public class Search_Fruits_in_Basket {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		
		System.out.println("enter the size of basket:");
		int n=sc.nextInt(); //Array Size
		String[] basket=new String[n]; //Array Declaration
		System.out.println("Add some fruits into the basket:");
		sc.nextLine();
		
		//getting user input
		for(int i=0;i<n;i++) {
			basket[i]=sc.nextLine();
		}
	
		//sorting fruits in basket using bubble sort
	      for(int a = 0; a < n - 1; a++)
	      {
	         for(int b = a + 1; b < n; b++)
	         {
	            if(basket[a].compareTo(basket[b]) > 0)
	            {
	               String temp = basket[a];
	               basket[a] = basket[b];
	               basket[b] = temp;
	            }
	         }
	      }
	      
		System.out.println("enter the fruit that you want to search!:");
		String fruit=sc.nextLine();
		
		//Validating the fruit name that want to search!
		for(int i=0;i<fruit.length();i++) {
			if (!((int) fruit.charAt(i) >=97 && (int) fruit.charAt(i)<=122)) {
				System.out.println("Invalid fruit name!");
				sc.close();
				return;
			}
		}
		
		//Binary Search Logic
		int l = 0, r = basket.length - 1; 
        while (l <= r) { 
            int m = l + (r - l) / 2; 
  
            int res = fruit.compareTo(basket[m]); 
  
            
            if (res == 0) {
                System.out.println("Found!"); //Dispaly Result
                sc.close();
            	return;
            }
  
            
            else if (res > 0) 
                l = m + 1; 
  
             
            else if (res <0)
                r = m - 1; 
            
           
        } 
        System.out.println("Not Found!"); //Display Result
        
		sc.close();


	}

}
