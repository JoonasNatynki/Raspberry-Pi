#include <stdio.h>
#include <string.h>

int main(int argc, char * argv[])
{
  FILE * file;
  
  char path[] = "/sys/class/gpio/gpio";
  char end[] = "/value";

  char * endPath = memcpy(path, end, 30);

  printf(endPath);

  file = fopen(endPath, "w+");
  fwrite("1", 1, sizeof("1"), file);
  fclose(file);
  return 0;
}
