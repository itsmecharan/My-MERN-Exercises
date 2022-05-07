/*finding number of times a substring is occurred in a given string
	by Ignoring case sensitivity of alphabets*/
/*
 *Psudocode 
 *1.Get the sentence(string) input from the user.
 *2.Get the another input of substring from user to find its occurrence.
 *3.Convert the both input strings to lower case by using convertCase Method.
 *4.Implement the logic to find the number of occurrences of the given substring in
 *  the sentence.
 *  5.Display the result.
 */
import java.util.Scanner;
public class Count_the_Occurrence_Of_Substring {
	
	//Method to convert alphabetic case of string characters!
		static String convertCase(String s) {
			
	        String result = "";
	        char ch = ' ';
	        
	        for (int i = 0; i < s.length(); i++) {
	            
	            if (s.charAt(i) >= 'a' && s.charAt(i) <= 'z') {
	                ch = (char)(s.charAt(i) - 32);
	            }
	            
	            else {
	                ch = (char)(s.charAt(i));
	            }
	            
	            result += ch; 
	        }
	        return result;
	    }

		//Main Method
		public static void main(String[] args) {
			Scanner scn=new Scanner(System.in);
			
			//take user input as sentence
			System.out.println("Enter the input sentence:");
			String sentence=scn.nextLine();
			
			//getting the  word to find number of occurrences
			System.out.println("Enter the word to find its occurrence:");
			String word=scn.nextLine();
			//char c=scn.next().charAt(0);
			//case conversion of given strings
			sentence=convertCase(sentence);
			word=convertCase(word);
			//String[] result=split_string(sentence,c);
			
//			for(int i=0;i<result.length;i++) {
//				System.out.print(result[i]+" ");
//			}

			int P= sentence.length();         
	        int Q = word.length();         
	        int count = 0; 
	        
			//logic to find the number of occurrences of the given word in sentence
	        for (int i = 0; i <= P - Q; i++) { 
	            int j;             
	            for (j = 0; j < Q; j++) { 
	                if (sentence.charAt(i + j) != word.charAt(j)) { 
	                    break; 
	                } 
	            } 
	  
	            if (j == Q) {                 
	                count++;                 
	                j = 0;                 
	            }             
	        }        
	        
			//printing output i.e., number of occurrences
			System.out.println("Substring Occurred "+count+" times");
			
			scn.close();
			}
		
//		public static String[] split_string(String str,char c) {
//			int count=0;
//			for(int i=0;i<str.length();i++) {
//				if(str.charAt(i)==c) {
//					count++;
//				}
//			}
//			//System.out.println(count);
//			String result[]=new String[count+1];
//			int val=0;
//			String s="";
//			for(int i=0;i<str.length();i++) {
//				if(str.charAt(i) != c) {
//					s+=str.charAt(i);
//				}
//				else {
//					result[val++]=s;
//					s="";
//				}
//			}
//			result[val]=s;
//			return result;
//					
//		}


}
