#include <stdio.h>
#include <string.h>

int main(int argc, char * argv[])
{
  FILE * file;
  
  file = fopen("/sys/class/gpio/gpio" + &argv[1] + "/value", "w+");
  fwrite("1", 1, sizeof("1"), file);
  fclose(file);
  return 0;
}
