// Task 1- A
// Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it

import java.util.Random;

public class ShuffleArray{
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        Random rand = new Random();
        int arrLength = arr.length;
        for(int i = arrLength-1;i>0;i--){
            int r = rand.nextInt(i);
            int temp = arr[i];
            arr[i] = arr[r];
            arr[r] = temp;
        }
        for (int i : arr) {
            System.out.println(i);
        }
    }
}