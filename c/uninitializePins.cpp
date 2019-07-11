#include <iostream>
#include <cstdio>
#include <string.h>
#include <fstream>

bool UninitializePin(int pinNumber)
{
  char filePath[] = "/sys/class/gpio/unexport";
  std::string stringNumber = std::to_string(pinNumber);
  const char* charNumber = stringNumber.c_str();

  std::ofstream myFile;
  myFile.open(filePath);
  myFile << charNumber;
  myFile.close();
  
  std::cout << "GPIO pin " << pinNumber << " uninitialized.\n";
  
  return true;
}

int main(int argc, char* argv[])
{
  for(int x = 2; x < 26; x++)
    {
      UninitializePin(x);
    }
  
  return 0;
}
