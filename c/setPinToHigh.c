#include <stdio.h>
#include <string.h>

int main(int argc, char * argv[])
{
  FILE * file;
  
  char buffer[40];

  sprintf(buffer, "/sys/class/gpio/gpio%s/value", argv[1]);

  int num = atoi(argv[1]);

  // TARKASTA ETTÄ NUMEROT ON 1-9 ja 10-99 EIKÄ 01, 02, 03 jne....

  file = fopen(buffer, "w+");
  fwrite("1", 1, sizeof("1"), file);
  fclose(file);
  return 0;
}
