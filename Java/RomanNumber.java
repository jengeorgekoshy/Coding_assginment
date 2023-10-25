// Task 1- B
// Enter a Roman Number as input and convert it to an integer. (ex IX = 9) 

import java.util.Scanner;

public class RomanNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println();
        System.out.print("Enter a Roman numeral: ");
        String romanNumber = sc.nextLine();
        romanNumber = romanNumber.trim();
        int result = romanToDecimal(romanNumber);
        System.out.println("The integer value of " + romanNumber + " is " + result);
        System.out.println();
        sc.close();
    }
    public static int romanToDecimal(String str) {
        int res = 0;
        for(int i = 0; i < str.length(); i++){
            char currentSymbol = str.charAt(i);
            int currentValue = value(currentSymbol);

            if(i + 1 < str.length()){
                char nextSymbol = str.charAt(i + 1);
                int nextValue = value(nextSymbol);

                if(currentValue >= nextValue){
                    res += currentValue;
                }
                else{
                    res += (nextValue - currentValue);
                    i++; 
                }
            }
            else{
                res += currentValue;
            }
        }
        return res;
    }

    public static int value(char r) {
        switch (r){
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                System.out.println("Invalid character "+ r);
                System.exit(1);
                return -1;
        }
    }
}
