#include <iostream>
#include <fstream>
#include <cstdio>
#include <cstdlib>
#include "PinController.h"

void PinController::SetPinValue(int pinNumber, EState pinState)
{
	char* gpioFilePath = new char[100];
	sprintf(gpioFilePath, "/sys/class/gpio/gpio%d/value", pinNumber);
	std::ofstream myFile;
	myFile.open(gpioFilePath);
	myFile << ((pinState == EState::High)?("1"):("0"));
	myFile.close();
	
	//std::cout << "Pin (" << pinNumber << ") set to value (" << pinState << ").\n";
}

void PinController::InitializePins()
{
	//	TODO
}
