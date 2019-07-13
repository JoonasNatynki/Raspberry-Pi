CXX = g++ -std=c++11 -c

CXXFLAGS = -std=c++11 -Wall

all: PulseLight InitializePins SetPin

PulseLight: pulseLight.o PinController.o
	g++ $(CXXFLAGS) pulseLight.o PinController.o -o PulseLight

InitializePins: initializePins.o
	g++ $(CXXFLAGS) initializePins.o -o InitializePins

SetPin: SetPin.o
	g++ $(CXXFLAGS) setPin.o PinController.o -o SetPin


pulseLight.o: pulseLight.cpp
	$(CXX) pulseLight.cpp

PinController.o: PinController.cpp
	$(CXX) PinController.cpp

initializePins.o: initializePins.cpp
	$(CXX) initializePins.cpp

SetPin.o: setPin.cpp
	$(CXX) setPin.cpp


clean:
	rm *.o PulseLight InitializePins SetPin
