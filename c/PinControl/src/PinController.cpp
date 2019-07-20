#include <iostream>
#include <fstream>
#include <cstdio>
#include <cstdlib>
#include "PinController.h"
#include <algorithm>
#include <string>
#include <thread>
#include <chrono>

#define SLEEP std::this_thread::sleep_for(std::chrono::milliseconds(100));

bool PinController::SetPinValue(int pinNumber, EState pinState)
{
	if(IsValidPin(pinNumber))
	{
		char gpioFilePath[100];
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

bool PinController::SetPinDirection(uint8_t pinNumber, EDirection pinDirection)
{
	if(IsValidPin((int)pinNumber))
	{
		char path[100];
		sprintf(path, "/sys/class/gpio/gpio%d/direction", pinNumber);
		std::ofstream myFile;
		myFile.open(path);
		myFile << ((pinDirection == EDirection::In)?("in"):("out"));
		myFile.close();
		return true;	
	}
	else
	{	
		std::cout << "Pin was not a valid one.\n";
		return false;
	}
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
  
  PinController::SetPinDirection(pinNumber, directionOfPin);

  return true;
}

void PinController::InitializePins()
{
	for(int x = 2; x < 26; x++)
	{
		EDirection direction = (x < 4)?(EDirection::Out):(EDirection::In);
		InitializePin(x, direction);
	}
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

int PinController::ReadPin(uint8_t pinNumber)
{
	char path[100];
	std::string line;
	sprintf(path, "/sys/class/gpio/gpio%d/value", pinNumber);
	std::ifstream myFile(path);
	
	if(myFile.is_open() && IsValidPin((int)pinNumber))
	{
		while(getline(myFile, line))
		{
			return std::atoi(line.c_str());
		}
	}
	else
	{
		std::cout << "Could not open file." << std::endl;
	}
}
