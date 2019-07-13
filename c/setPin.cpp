#include <iostream>
#include <fstream>
#include <cstdio>
#include <cstdlib>
#include "PinController.h"

int main(int argc, char* argv[])
{
  // The pin number we are setting.
  char* pinNumber = argv[1];
  // The value we are setting the pin (0-1)
  char* pinValue = argv[2];

  std::cout << "Setting the GPIO pin number (" << pinNumber << ") to value (" << pinValue << ")\n";

  PinController::SetPinValue(std::atoi(pinNumber), ((*pinValue == '1')?(EState::High):(EState::Low)));

  std::cout << "Pin value set successfully!\n";
  
  return 0;
}
