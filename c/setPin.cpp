#include <iostream>
#include <fstream>
#include <cstdio>
#include <cstdlib>

enum EState
{
	Low,
	High
};

void SetPin(int pinNumber, EState pinState)
{
	char* gpioFilePath = new char[100];
	sprintf(gpioFilePath, "/sys/class/gpio/gpio%d/value", pinNumber);
	std::ofstream myFile;
	myFile.open(gpioFilePath);
	myFile << ((pinState == EState::High)?("1"):("0"));
	myFile.close();
	
	//std::cout << "Pin (" << pinNumber << ") set to value (" << pinState << ").\n";
}

//int main(int argc, char* argv[])
//{
  // The pin number we are setting.
  //char* pinNumber = argv[1];
  // The value we are setting the pin (0-1)
  //char* pinValue = argv[2];

  //std::cout << "Setting the GPIO pin number (" << pinNumber << ") to value (" << pinValue << ")\n";

  //SetPin(std::atoi(pinNumber), ((*pinValue == '1')?(EState::High):(EState::Low)));

  //std::cout << "Pin value set successfully!\n";
  
  //return 0;
//}
