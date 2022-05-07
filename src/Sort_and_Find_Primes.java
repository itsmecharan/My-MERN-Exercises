//finding and displaying the prime numbers in the array by insertion sort

/*
 * Psudocode
 * 1.Get the input from the user i.e., size of the array and array with integers.
 * 2.Sort the array using insertion sort algorithm.
 * 3.Display the integers after the sorting.
 * 4.Implement prime number logic to find prime numbers in the array.
 * 5.Display the Prime numbers.
 */

import java.util.Scanner;
public class Sort_and_Find_Primes {

	public static void main(String[] args) {
		Scanner sc=new Scanner (System.in);
		
		System.out.println("Enter the Array size:");
		int n=sc.nextInt();//size of array
		int[] arr=new int[n];
		
		//Getting user Input into array
		System.out.println("Enter the Array Elements:");
		for(int i=0;i<n;i++) {
			arr[i]=sc.nextInt();
		}
		
		//Insertion Sort logic
		int key,j;
		for(int i=1;i<n;i++) {
			key=arr[i];
			j=i-1;
			while(j>=0 && arr[j]>key) {
				arr[j+1]=arr[j];
				j--;
			}
			arr[j+1]=key;
		}
		
		//printing numbers in the array after sorting!
		System.out.println("After Sorting by Insertion Sort:");
		for(int i=0;i<n;i++) {
			System.out.print(arr[i]+" ");
		}
		
		//Finding and Displaying prime numbers of the array
		System.out.println("\nPrime Sorted Subset Array:");
		
		boolean flag;
		for(int i=0;i<n;i++) {
			flag=true;
			if (arr[i] <= 1) {  
		           continue;  
		       }  
			
		    for (int k = 2; k<=(arr[i]/2); k++) {  //can use Math.sqrt() function also
		           if (arr[i] % k == 0) { 
		        	   flag=false;
		               break; 
		           }  
		       } 
		    
		    if(flag) {
		       System.out.print(arr[i]+" ");  //Displaying
		    }
		   
		}
		sc.close();

	}

}
