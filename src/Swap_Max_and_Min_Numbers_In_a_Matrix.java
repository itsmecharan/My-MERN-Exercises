/*Swapping maximum number and minimum number in a given numbered matrix 
	and displaying the resultant matrix. */
/*
 * Psudocode
 * 1.Get the 2d array size and unique numbers into the matrix from the user.
 * 2.Validate the array which contains the unique numbers or not.
 * 3.Display the given array.
 * 4.find the maximum and minimum numbers from the given array.
 * 5.Swap the maximum number and minimum number in the array.
 * 6.Display the resultant array.
 */

import java.util.Scanner;

public class Swap_Max_and_Min_Numbers_In_a_Matrix {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		
		//Getting user input
		System.out.println("Enter the Size of 2D Array");
		
		System.out.println("m value is:");
		int m=sc.nextInt();
		
		System.out.println("n value is:");
		int n=sc.nextInt();
		
		int[][] arr=new int[m][n];
		System.out.println("Enter Unique numbers into the array:");
		for(int i=0;i<m;i++) {
			for(int j=0;j<n;j++) {
				arr[i][j]=sc.nextInt();
			}
		}
		
		
		int t,count;
		//Validating the array elements whether unique or not!
		for(int i=0;i<m;i++) {
			for(int j=0;j<n;j++) {
				count=0;
				t=arr[i][j];
				for(int p=0;p<m;p++) {
					for(int q=0;q<n;q++) {
						if(t==arr[p][q]) {
							count++;
						}
					}
				}
				if(count>1) {
					System.out.println("Please enter non-duplicate numbers into Array!");
					sc.close();
					return;
				}
			}
		}
		
		//Displaying the Original array
		System.out.println("Given array:");
		for(int i=0;i<m;i++) {
			for(int j=0;j<n;j++) {
				System.out.print(arr[i][j]+" ");
			}
			System.out.println();
		}
		System.out.println();
		
		//Finding minimum and maximum values positions in the array!
		int i1=0,i2=0,j1=0,j2=0,temp;
		int min=2147483647;
		int max=-2147483648;
		for(int i=0;i<m;i++) {
			for(int j=0;j<n;j++) {
				if(arr[i][j]>max) {
					max=arr[i][j];
					i1=i;
					j1=j;
				}
				if(arr[i][j]<min) {
					min=arr[i][j];
					i2=i;
					j2=j;
				}
			}
		}
		
		
		
		//swapping max and min values in the array
		temp=arr[i1][j1];
		arr[i1][j1]=arr[i2][j2];
		arr[i2][j2]=temp;
		
		//Displaying Array after swapping
		System.out.println("Swapped Array:");
		for(int i=0;i<m;i++) {
			for(int j=0;j<n;j++) {
				System.out.print(arr[i][j]+" ");
			}
			System.out.println();
		}
		sc.close();


	}

}
