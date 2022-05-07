import java.util.Scanner;
public class Reverse_Diagonals {

	public static int [][] reverse(int [][] arr,int n){
		if(n%2 ==0) {
			int temp1[]=new int[n];
			int temp2[]=new int[n];
			int count1=0;
			int count2=0;
			
			for(int i=0;i<n;i++) {
				for(int j=0;j<n;j++){
					if(i==j ) {
						temp1[count1]=arr[i][j];
						count1++;
					}
					else if(i+j==n-1) {
						temp2[count2]=arr[i][j];
						count2++;
					}
					else {
						arr[i][j]=arr[i][j] * arr[i][j];
					}
					
				}
			}
			
			count1=temp1.length-1;
			count2=temp2.length-1;
			for(int i=0;i<n;i++) {
				for(int j=0;j<n;j++){
					if(i==j) {
						arr[i][j]=temp1[count1];
						count1--;
					}
					else if(i+j==n-1) {
						arr[i][j]=temp2[count2];
						count2--;
					}
				}
			}
			
		}
		
		else {
			
			int temp1[]=new int[n];
			int temp2[]=new int[n-1];
			int count1=0;
			int count2=0;
			
			for(int i=0;i<n;i++) {
				for(int j=0;j<n;j++){
					if(i==j ) {
						temp1[count1]=arr[i][j];
						count1++;
					}
					else if(i+j==n-1) {
						temp2[count2]=arr[i][j];
						count2++;
					}
					else {
						arr[i][j]=arr[i][j] * arr[i][j];
					}
					
				}
			}
			
			count1=temp1.length-1;
			count2=temp2.length-1;
			for(int i=0;i<n;i++) {
				for(int j=0;j<n;j++){
					if(i==j) {
						arr[i][j]=temp1[count1];
						count1--;
					}
					else if(i+j==n-1) {
						arr[i][j]=temp2[count2];
						count2--;
					}
				}
			}
			
		}
		return arr;
	}
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the size of matrix:");
		int n=sc.nextInt();
		int arr[][]=new int[n][n];
		System.out.println("enter the elements into the matrix:");
		for(int i=0;i<n;i++) {
			for(int j=0;j<n;j++){
				arr[i][j]=sc.nextInt();
			}
		}
		
		System.out.println("Given Array");
		System.out.println();
		for(int i=0;i<n;i++) {
			for(int j=0;j<n;j++){
				System.out.print(arr[i][j]+" ");
			}
			System.out.println();
		}
		
		int[][] result=reverse(arr,n);
		
		System.out.println();
		System.out.println("Resultant array:");
		System.out.println();
		for(int i=0;i<n;i++) {
			for(int j=0;j<n;j++){
				System.out.print(result[i][j]+" ");
			}
			System.out.println();
		}
		
		sc.close();

	}

}
