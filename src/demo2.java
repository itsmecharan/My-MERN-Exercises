import java.util.Scanner;
public class demo2 {

	public static void main(String[] args) {
		Scanner scn=new Scanner(System.in);
		System.out.println("enter n value:");
		int n=scn.nextInt();
		System.out.println("enter the m value:");
		int m=scn.nextInt();
		
		int arr[][]=new int[n][m];
		System.out.println("enter elements into the matrix");
		for(int i=0;i<n;i++) {
			for(int j=0;j<m;j++) {
				arr[i][j]=scn.nextInt();
			}
		}
		int len=n*m;
		int temp[]=new int[len];
		int count=0;
			for(int j=0;j<n;j++) {
				for(int k=0;k<m;k++) {
					temp[count++]=arr[j][k];
				}
			}
		
		//insertion sort
		
		for(int i=1;i<len;i++) {
			int key= temp[i];
			int j=i-1;
			
			while(j>=0 && temp[j] > key) {
				temp[j+1] = temp[j];
				j=j-1;
			}
			temp[j+1] =key;
		}
		
//		for(int i=0;i<len;i++) {
//			System.out.print(temp[i]+" ");
//		}
			
		//binary search
		System.out.println("enter the value to search");
		int key=scn.nextInt();
		int first=0;
		int last=len-1;
		int mid= (first+last)/2;
		while(first <= last) {
			if(temp[mid] < key) {
				first=mid+1;
			}
			else if(temp[mid] == key) {
				System.out.println("found at"+mid);
				break;
			}
			else {
				last=mid-1;
			}
			mid=(first+last)/2;
		}
		if(first > last) {
			System.out.println("not found!");
		}
		
		
		scn.close();
	}

}
