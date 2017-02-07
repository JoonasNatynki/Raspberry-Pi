#include <stdio.h>
#include <string.h>

int main(int argc, char * argv[])
{
  FILE * file;
  
  char path[] = "/sys/class/gpio/gpio";
  char end[] = "/value";

  char * endPath

  asprintf(&endpath, "%s%s", path, end);

  file = fopen(endPath, "w+");
  fwrite("1", 1, sizeof("1"), file);
  fclose(file);
  return 0;
}
