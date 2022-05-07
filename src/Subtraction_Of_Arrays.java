/*Subtraction Of two Arrays and finding the negative numbers 
	from the resultant array */
/*
 * Psudocode
 * 1.Get the size of two arrays and numbers into the arrays from the user.
 * 2.Implement the logic to subtract the both arrays and store result in new array.
 * 3.Display the negative numbers from the resultant array.
 */
import java.util.Scanner;

public class Subtraction_Of_Arrays {
	public static int[] subtract_arrays(int arr1[],int arr2[]) {
		int n=arr1.length;
		int[] arr3=new int[n];
		for(int i=0;i<n;i++) {
			arr3[i]=arr1 [i]-arr2[i];
		}
		return arr3;
	}
	
	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		
		//Getting the user input
		System.out.println("Enter the arrays size!");
		int n=sc.nextInt();
		
		int[] arr1=new int[n];
		int[] arr2=new int[n];
		
		
		System.out.println("Enter the numbers into array1 :");
		for(int i=0;i<n;i++) {
			arr1[i]=sc.nextInt();
		}
		
		System.out.println("Enter the numbers into array2 :");
		for(int i=0;i<n;i++) {
			arr2[i]=sc.nextInt();
		}
		
		//Implementing logic to subtract arrays
		System.out.println("Resultant Array:");
		int[] arr=subtract_arrays(arr1,arr2);
		for(int i=0;i<n;i++) {
			System.out.print(arr[i]+" ");
		}
		
		//Displaying negative numbers from the resultant array
		System.out.println("Array with negative numbers:"+"\t");
		for(int i=0;i<n;i++) {
			if(arr[i]<0) {
				System.out.print(arr[i]+" ");
			}
		}
		
		sc.close();

	}

}
