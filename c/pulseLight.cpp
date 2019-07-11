#include <iostream>
#include "setPin.cpp"
#include <chrono>
#include <thread>

#define SLEEP2 std::this_thread::sleep_for(std::chrono::milliseconds(100));

int main(int argc, char* argv[])
{
	while(1)
	{
		SetPin(2, EState::High);
		SLEEP2;
		SetPin(2, EState::Low);
		SLEEP2;
	}	

	return 0;
}
