#include <iostream>
#include <string.h>
#include "PinController.h"

int main(int argc, char* argv[])
{
	const char* pinNumber = argv[1];
	const char* pinDirection = argv[2];

	EDirection pinDir = (strcmp(pinDirection, "in") == 0)?(EDirection::In):(EDirection::Out);

	PinController::SetPinDirection((uint8_t)std::atoi(pinNumber), pinDir);

	std::cout << "Pin direction set." << std::endl;

	return 0;
}
