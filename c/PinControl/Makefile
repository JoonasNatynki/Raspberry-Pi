CXX = sudo g++ -std=c++11 -I include/ -c

CXXFLAGS = -std=c++11 -Wall

all: PulseLight InitializePins SetPin UninitializePins

PulseLight: pulseLight.o libPinController.so
	g++ $(CXXFLAGS) bin/pulseLight.o -L bin/ -lPinController -o build/PulseLight

InitializePins: initializePins.o
	g++ $(CXXFLAGS) bin/initializePins.o -o build/InitializePins

SetPin: SetPin.o
	g++ $(CXXFLAGS) bin/SetPin.o -L bin/ -lPinController -o build/SetPin

UninitializePins: uninitializePins.o
	sudo g++ $(CXXFLAGS) bin/uninitializePins.o -o build/UninitializePins


libPinController.so: PinController.o
	sudo g++ -shared -o bin/libPinController.so bin/PinController.o


pulseLight.o: src/pulseLight.cpp
	$(CXX) src/pulseLight.cpp -o bin/pulseLight.o

PinController.o: src/PinController.cpp
	$(CXX) src/PinController.cpp -o bin/PinController.o

initializePins.o: src/initializePins.cpp
	$(CXX) src/initializePins.cpp -o bin/initializePins.o

SetPin.o: src/setPin.cpp
	$(CXX) src/setPin.cpp -o bin/SetPin.o

uninitializePins.o: src/uninitializePins.cpp
	$(CXX) src/uninitializePins.cpp -o bin/uninitializePins.o


clean:
	sudo rm bin/*.o build/PulseLight build/InitializePins build/SetPin build/UninitializePins bin/libPinController.so
