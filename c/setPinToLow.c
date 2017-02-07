#include <stdio.h>
#include <string.h>

int main(int argc, char * argv[])
{
  FILE * file;
  
  char buffer[40];

  sprintf(buffer, "/sys/class/gpio/gpio%s/value", atoi(argv[1]));

  // TARKASTA ETTÄ NUMEROT ON 1-9 ja 10-99 EIKÄ 01, 02, 03 jne....

  file = fopen(buffer, "w+");
  fwrite("0", 1, sizeof("0"), file);
  fclose(file);
  return 0;
}
