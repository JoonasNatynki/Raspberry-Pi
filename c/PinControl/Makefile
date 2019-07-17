CXX = g++ -std=c++11 -c

CXXFLAGS = -std=c++11 -Wall

all: PulseLight InitializePins SetPin UninitializePins

PulseLight: pulseLight.o PinController.o
	g++ $(CXXFLAGS) pulseLight.o PinController.o -o PulseLight

InitializePins: initializePins.o
	g++ $(CXXFLAGS) initializePins.o -o InitializePins

SetPin: SetPin.o
	g++ $(CXXFLAGS) setPin.o PinController.o -o SetPin

UninitializePins: uninitializePins.o
	g++ $(CXXFLAGS) uninitializePins.o -o UninitializePins


pulseLight.o: pulseLight.cpp
	$(CXX) pulseLight.cpp

PinController.o: PinController.cpp
	$(CXX) PinController.cpp

initializePins.o: initializePins.cpp
	$(CXX) initializePins.cpp

SetPin.o: setPin.cpp
	$(CXX) setPin.cpp

uninitializePins.o: uninitializePins.cpp
	$(CXX) uninitializePins.cpp


clean:
	rm *.o PulseLight InitializePins SetPin UninitializePins
