#include <iostream>
#include <fstream>
#include <cstdio>
#include <cstdlib>
#include "PinController.h"
#include <algorithm>

bool PinController::SetPinValue(int pinNumber, EState pinState)
{
	if(IsValidPin(pinNumber))
	{
		char* gpioFilePath = new char[100];
		sprintf(gpioFilePath, "/sys/class/gpio/gpio%d/value", pinNumber);
		std::ofstream myFile;
		myFile.open(gpioFilePath);
		myFile << ((pinState == EState::High)?("1"):("0"));
		myFile.close();
		return true;
	}
	else
	{
		std::cout << "Pin was not a valid one.\n";
		return false;
	}
}

void PinController::InitializePins()
{
	//	TODO
}

bool PinController::IsValidPin(int pinNumber)
{
	if(std::find(ValidPins.begin(), ValidPins.end(), (uint8_t)pinNumber) != ValidPins.end())
	{
		return true;
	}
	else
	{
		return false;
	}
}
