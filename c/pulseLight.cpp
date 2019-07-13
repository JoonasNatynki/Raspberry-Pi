#include <iostream>
#include "PinController.h"
#include <chrono>
#include <thread>

#define SLEEP std::this_thread::sleep_for(std::chrono::milliseconds(300));

int main(int argc, char* argv[])
{
	while(1)
	{
		PinController::SetPinValue(2, EState::High);
		SLEEP;
		PinController::SetPinValue(2, EState::Low);
		SLEEP;
	}	

	return 0;
}
