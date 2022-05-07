//Find the average of odd numbers in each diagonal in a 3x3 matrix!
/*
 * PsuodCode
 * 1. Get the user input of Integers into the 2D array(size:3 rows,3 columns)
 * 2.Initialize the required variables to compute average.
 * 3.write the logic to sum the odd numbers of each diagonal in 3x3 matrix
 *  into the two separate variables.
 * 4.Check whether the diagonals of matrix contain odd numbers or not.
 * 5.Find and display the average of each diagonal if odd numbers exist in it.
 */
import java.util.Scanner;
public class Compute_Diagonals_in_Matrix {

	public static void main(String[] args) {
		Scanner scn=new Scanner(System.in);
		
		//getting user input
		int[][] arr=new int[3][3];
		System.out.println("Enter the numbers into the matrix:");
		for(int i=0;i<3;i++) {
			for(int j=0;j<3;j++) {
				arr[i][j]=scn.nextInt();
			}
		}
		
		int sum1=0,sum2=0;
		double avg1,avg2;
		int count1=0,count2=0;
		
		//logic to sum the odd numbers in each diagonal of the matrix
		for(int i=0;i<3;i++) {
			for(int j=0;j<3;j++) {
				if((i==0 && j==0)||(i==1 && j==1) || (i==2 && j==2)) {
					if(arr[i][j]%2 != 0) {
						sum1+=arr[i][j];
						count1++;
					}
				}
				if((i==0 && j==2) || (i==1 && j==1) || (i==2 && j==0)) {
					if(arr[i][j]%2 != 0) {
						sum2+=arr[i][j];
						count2++;
					}
				}
			}
		}
		
		//Finding the average of odd numbers if it exists in  the matrix.
		
		if(count1 !=0) {
		avg1=sum1/count1;
		System.out.println("Primary diagonal odd numbers average :"+avg1);
		}
		else {
			System.out.println("Primary Diagonal doesn't contain any odd number!");
		}
		
		if(count2 !=0) {
			avg2=sum2/count2;
			System.out.println("Secondary diagonal odd numbers average :"+avg2);
		}
		else {
			System.out.println("Secondary Diagonal doesn't contain any odd number!");
		}
		
		
		scn.close();


	}

}
