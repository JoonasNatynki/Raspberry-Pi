CXX=g++
CXXFLAGS=-std=c++11 -c -Wall

all: InitializePins UninitializePins PulseLight

#SetPin: setPin.o
#	$(CXX) setPin.o -o SetPin

InitializePins: initializePins.o
	$(CXX) initializePins.o -o InitializePins

UninitializePins: uninitializePins.o
	$(CXX) uninitializePins.o -o UninitializePins

PulseLight: pulseLight.o
	$(CXX) pulseLight.o -o PulseLight


#setPin: setPin.cpp
#	$(CXX) $(CXXFLAGS) setPin.cpp

initializePins: initializePins.cpp
	$(CXX) $(CXXFLAGS) initializePins.cpp

uninitializePins: uninitializePins.cpp
	$(CXX) $(CXXFLAGS) uninitializePins.cpp

pulseLight: pulseLight.cpp
	$(CXX) $(CXXFLAGS) pulseLight.cpp

clean:
	rm -rf *o InitializePins UninitializePins PulseLight
