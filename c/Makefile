CXX=g++
CXXFLAGS=-std=c++11 -c -Wall

all: SetPin InitializePins UninitializePins

SetPin: setPin.o
	$(CXX) setPin.o -o SetPin

InitializePins: initializePins.o
	$(CXX) initializePins.o -o InitializePins

UninitializePins: uninitializePins.o
	$(CXX) uninitializePins.o -o UninitializePins


setPin: setPin.cpp
	$(CXX) $(CXXFLAGS) setPin.cpp

initializePins: initializePins.cpp
	$(CXX) $(CXXFLAGS) initializePins.cpp

uninitializePins: uninitializePins.cpp
	$(CXX) $(CXXFLAGS) uninitializePins.cpp

clean:
	rm -rf *o SetGPIOPinToValue InitializePins UninitializePins
