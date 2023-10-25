// Task 1- C
// Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet
// from a-z) 

import java.util.Scanner;

public class Pangram {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the string");
        String str = sc.nextLine();
        str = str.trim();
        int len = str.length();
        boolean flag = pangramChecker(str,len);
        if(flag){
            System.out.println("The given string is a pangram");
        }
        else{
            System.out.println("Not a pangram");
        }
        
    }
    public static boolean pangramChecker(String str, int len){
        if(len<26){
            return false;
        }
        for(char ch = 'a';ch <= 'z';ch++){
            if(str.indexOf(ch)<0){
                return false;
            }
        }
        return true;
    }
}