//Separate given strings by alphabets and numbers!

/* Psudocode
 * 1.Get the user input of two alpha-numeric strings
 * 2.Divide the given strings into a alphabetic string and a numbered string using loops.
 * 3.Implement a method to remove duplicate characters from the string
 * 4.Invoke remove duplicates method using the separated strings
 * (alphabetic and numbered strings)
 * 5.Display the returned strings separately!
 */

import java.util.Scanner;
public class Separate_AlphaNumeric_Strings {
	
	//method to remove duplicate characters in a string
		static String removeDuplicates(String s) 
	    { 
			int n=s.length(); //length of string
			char [] str=new char[n]; //array to store string characters separately
			
			for(int k=0;k<n;k++) {
				str[k]=s.charAt(k);
			}
			s="";
	        
	        for (int i = 0; i < n; i++) 
	        { 
	              int j; 
	            for (j = 0; j < i; j++)  
	            { 
	                if (str[i] == str[j]) 
	                { 
	                    break; 
	                } 
	            } 
	   
	            if (j == i)  
	            { 
	                s+=str[i];
	            } 
	        } 
	        return s; 
	    } 
		

		public static void main(String[] args) {
			Scanner scn= new Scanner(System.in);
			System.out.println("Enter the Alpha-Numeric String1");
	        String s1=scn.nextLine();
	        System.out.println("Enter the Alpha-Numeric String2");
	        String s2=scn.nextLine();
	        
	        String p="";
	        String q="";
	        
	        
	        for(int i=0;i<s1.length();i++) {
	        	if((s1.charAt(i)>='A' && s1.charAt(i)<='Z') ||
	        			(s1.charAt(i)>='a' && s1.charAt(i)<='z')) {
	        		p+=s1.charAt(i);
	        	}
	        	if(s1.charAt(i)>='0' && s1.charAt(i)<='9') {
	        		q+=s1.charAt(i);
	        	}
	        }
	        
	        for(int i=0;i<s2.length();i++) {
	        	if((s2.charAt(i)>='A' && s2.charAt(i)<='Z') || 
	        			(s2.charAt(i)>='a' && s2.charAt(i)<='z')) {
	        		p+=s2.charAt(i);
	        	}
	        	if(s2.charAt(i)>='0' && s2.charAt(i)<='9') {
	        		q+=s2.charAt(i);
	        	}
	        }
	        
	        System.out.println(removeDuplicates(p));
	        System.out.println(removeDuplicates(q));
	        
	        scn.close();


	}

}
