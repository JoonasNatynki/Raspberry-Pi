#include <iostream>
#include "PinController.h"

int main(int argc, char* argv[])
{
	char* pinNumber = argv[1];
	
	int pinValue = PinController::ReadPin(std::atoi(pinNumber));

	std::cout << pinValue << std::endl;

	return 0;
}
