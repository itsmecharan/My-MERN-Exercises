import java.util.Scanner;
public class Demo {

	public static void main(String[] args) {
		Scanner scn=new Scanner(System.in);
		String str=scn.nextLine();
		
		int count=0;
		for(int i=0;i<str.length();i++) {
			if(str.charAt(i)==' ') {
				count++;
			}
		}
		String [] arr=new String[count+1];
		count=0;
		String s="";
		for(int i=0;i<str.length();i++) {
			if(str.charAt(i)!=' ') {
				s+=str.charAt(i);
			}
			else {
				arr[count++]=s;
				s="";
			}
		}
		arr[count]=s;
		for(int j=0;j<arr.length;j++) {
			System.out.print(arr[j]+" ");
		}
		System.out.println();
		String temp="";
		for(int j=0;j<arr.length;j++) {
			for(int k=0;k<arr[j].length();k++) {
				if(k%2==0) {
					temp+=arr[j].charAt(k);
				}
			}
			temp+=" ";
		}
		System.out.println(temp);
		scn.close();
	}

}
