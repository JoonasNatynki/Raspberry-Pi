#include <stdio.h>
#include <string.h>

int main()
{
  FILE * file;
  char high[] = "0";

  file = fopen("/sys/class/gpio/gpio21/value", "w+");
  fwrite(high, 1, sizeof(high), file);
  fclose(file);
}
