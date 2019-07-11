#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <string.h>
#include <thread>
#include <chrono>
#include <fstream>

#define SLEEP std::this_thread::sleep_for(std::chrono::milliseconds(100));

enum EDirection
{
  In,
  Out
};

bool SetPinDirection(int pinNumber, EDirection pinDirection)
{
  char filePathToChangeDirection[100];
  sprintf(filePathToChangeDirection, "/sys/class/gpio/gpio%d/direction", pinNumber);

  std::fstream myFile;
  myFile.open(filePathToChangeDirection);
  myFile << ((pinDirection == EDirection::Out) ? ("out") : ("in"));
  myFile.close();
  
  std::cout << "Pin (" << pinNumber << ") direction changed to 'out'\n";

  SLEEP;

  return true;
}

bool InitializePin(int pinNumber, EDirection directionOfPin)
{
  char filePathToExport[] = "/sys/class/gpio/export";
  std::string numberAsString = std::to_string(pinNumber);
  const char* charNumber = numberAsString.c_str();

  std::ofstream myFile;
  myFile.open(filePathToExport);
  myFile << charNumber;
  myFile.close();

  std::cout << "GPIO pin " << pinNumber  <<  " initialized.\n";

  SLEEP;
  
  SetPinDirection(pinNumber, directionOfPin);

  return true;
}

int main(int argc, char* argv[])
{

  for(int x = 2; x < 26; x++)
  {
    InitializePin(x, EDirection::Out);
  }
  
  return 0;
}
