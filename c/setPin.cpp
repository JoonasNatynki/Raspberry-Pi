#include <iostream>
#include <cstdio>
#include <cstdlib>

int main(int argc, char* argv[])
{
  // The pin number we are setting.
  char* pinNumber = argv[1];
  // The value we are setting the pin (0-1)
  char* pinValue = argv[2];
  std::cout << "Setting the GPIO pin number (" << pinNumber << ") to value (" << pinValue << ")\n";

  // The file stream we are writing
  FILE* gpioFile;
  char* gpioFilePath = (char*)std::malloc(sizeof(char) * 1024);
  sprintf(gpioFilePath, "/sys/class/gpio/gpio%s/value", pinNumber);

  // Open the file for writing
  gpioFile = fopen(gpioFilePath, "w+");
  fwrite(pinValue, sizeof(char), sizeof(pinValue), gpioFile );
  fclose(gpioFile);
  
  std::cout << "Pin value set successfully!\n";
  
  return 0;
}
