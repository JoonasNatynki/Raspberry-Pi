#include <stdio.h>
#include <string.h>

int main(int argc, char * argv[])
{
  FILE * file;
  
  char buffer[40];

  sprintf(buffer, "/sys/class/gpio/gpio%s/value", argv[1]);

  printf(buffer);

  file = fopen(buffer, "w+");
  fwrite("1", 1, sizeof("1"), file);
  fclose(file);
  return 0;
}
