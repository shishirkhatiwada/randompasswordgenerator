import java.util.Random;
import java.util.Scanner;

public class generator {
    // function to generate password
    static String generate_password(int size) {
        // collection of characters that can be used in password
        String chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-/.,<>?;':\"[]{}\\|`~";

        String password = "";
        // creating object of Random class
        Random rnd = new Random();
        // looping to generate password
        while (password.length() < size) {
            // get a random number between 0 and length of chars
            int index = (int) (rnd.nextFloat() * chars.length());
            // add character at index to password
            password += chars.charAt(index);
        }
        return password;
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of password: ");
        int size = sc.nextInt();
        sc.close();

        String password = generate_password(size);

        System.out.println(password);
    }
}
    

       
