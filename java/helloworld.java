import java.io.BufferedReader;
import java.io.FileReader;

public class helloworld {

    public static void main (String args[]) throws Exception {

       String regex = "[ \t]+";
       FileReader fr = new FileReader (args[0]);        
       BufferedReader br = new BufferedReader (fr);
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
