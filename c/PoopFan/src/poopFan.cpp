#include <iostream>
#include "PinController.h"
#include <chrono>
#include <thread>

#define SLEEP(_time) std::this_thread::sleep_for(std::chrono::milliseconds(_time))
typedef std::chrono::time_point<std::chrono::system_clock> TimePoint;

void Tick(bool& bCurrentPinValue, bool& bFanIsRunning, bool& bIsPooping, TimePoint& PoopingStartTime, TimePoint& PoopingEndTime, TimePoint& FanStartTime, TimePoint& FanEndTime, float& TimeSpentPooping, int FanOnDuration)
{

	//	Record pooping start time
	if(PinController::ReadPin(4))
	{
		if(!bIsPooping)
		{
			PoopingStartTime = std::chrono::system_clock::now();
			std::cout << "Pooping start time set.\n";
		}

		bIsPooping = true;
	}
	
	//	Record pooping end time
	if(!PinController::ReadPin(4) && bIsPooping)
	{
		PoopingEndTime = std::chrono::system_clock::now();
		std::cout << "Pooping end time set\n";
		std::chrono::duration<double> PoopingLength = PoopingEndTime - PoopingStartTime;
		std::cout << "Pooping took (" << PoopingLength.count() << ") seconds." << std::endl;
		bIsPooping = false;
	}
	
	if(!bFanIsRunning && bIsPooping)
	{
		std::cout << "ACTIVATE FAN!!!!" << std::endl;
		FanStartTime = std::chrono::system_clock::now();
		//	ACTIVATE FAN!!
		std::cout << "FanStartTime set.\n";
		bFanIsRunning = true;
	}

	if(bFanIsRunning)
	{
		//	What do?!
	}
	
	FanEndTime = std::chrono::system_clock::now();

	std::chrono::duration<double> FanOnTimeLength = FanEndTime - PoopingEndTime;
	
	if(bFanIsRunning && !bIsPooping && (FanOnDuration < (FanOnTimeLength.count())))
	{
		std::cout << "DEACTIVATE FAN!!!" << std::endl;
		FanOnTimeLength = FanEndTime - FanStartTime;
		FanEndTime = std::chrono::system_clock::now();
		std::cout << "Fan was active for (" << FanOnTimeLength.count() << ") seconds.\n";
		bFanIsRunning = false;
	}
}

int main(int argc, char* argv[])
{

	bool bMeasuringPoopingTime = false;
	bool bFanIsRunning = false;
	auto PoopingStartTime = std::chrono::system_clock::now();
	auto PoopingEndTime = PoopingStartTime;
	auto FanStartTime = std::chrono::system_clock::now();
	auto FanEndTime = FanStartTime;
	
	//	Take the parameter and convert to seconds that the fan is supposed to be on each pooping
	char* FanOnDuration_param = argv[1];
	int FanOnDuration = std::atoi(FanOnDuration_param);

	int FanActiveTimeInMilliseconds = 2000;
	float TimeSpentPooping;

	while(1)
	{	
		Tick(bMeasuringPoopingTime, bFanIsRunning, bMeasuringPoopingTime, PoopingStartTime, PoopingEndTime, FanStartTime, FanEndTime, TimeSpentPooping, FanOnDuration);
	}

	return 0;
}
