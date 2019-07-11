#include <stdio.h>
#include <string.h>

int main(int argc, char * argv[])
{
  FILE * file;
  
  char buffer[40];

  sprintf(buffer, "/sys/class/gpio/gpio%s/value", argv[1]);

  file = fopen(buffer, "w+");
  fwrite(argv[2], 1, sizeof(argv[2]), file);
  fclose(file);
  return 0;
}
