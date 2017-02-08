import java.io.BufferedReader;
import java.io.FileReader;

public class wordcounter {

    public static void main (String args[]) throws Exception {

       String regex = "[ \t]+";
       FileReader fr = new FileReader (args[0]);    // Read the file given as an argument
       BufferedReader br = new BufferedReader (fr); // Put the content of the file to bufferreader
       String text = new String();
       for (String line; (line = br.readLine()) != null; text += line);
       int count = 0;
       String []parts = text.split(regex);
       for(String w : parts)
        {
           System.out.println(w);
           count++;
        }
       System.out.println("Words counted: " + count);
    }
}
