CXX = sudo g++ -std=c++11 -I include/ -c

CXXFLAGS = -Wall

$all: PulseLight InitializePins SetPin UninitializePins SetPinDirection ReadPin 

install: install_i PulseLight InitializePins SetPin UninitializePins SetPinDirection ReadPin tidy 

uninstall: uninstall_i clean tidy

PulseLight: pulseLight.o libPinController.so
	@echo "Compiling executable PulseLight."
	g++ $(CXXFLAGS) -L bin/ -o bin/PulseLight -lPinController bin/pulseLight.o

InitializePins: initializePins.o libPinController.so
	@echo "Compiling executable InitializePins."
	g++ $(CXXFLAGS) -L bin/ bin/initializePins.o -lPinController -o bin/InitializePins

SetPin: SetPin.o libPinController.so
	@echo "Compiling executable SetPin."
	g++ $(CXXFLAGS) -L bin/ bin/SetPin.o -lPinController -o bin/SetPin

UninitializePins: uninitializePins.o
	@echo "Compiling executable UninitializePins."
	sudo g++ $(CXXFLAGS) bin/uninitializePins.o -o bin/UninitializePins

SetPinDirection: setPinDirection.o libPinController.so
	@echo "Compiling executable SetPinDirection."
	sudo g++ $(CXXFLAGS) -L bin/ bin/setPinDirection.o -lPinController -o bin/SetPinDirection

ReadPin: readPin.o libPinController.so
	@echo "Compiling executable ReadPin."
	sudo g++ $(CXXFLAGS) -L bin/ bin/readPin.o -lPinController -o bin/ReadPin

tidy:
	@echo "Tidying up."
	sudo rm bin/*.o



install_i: bin/libPinController.so
	sudo cp bin/libPinController.so /usr/lib

uninstall_i: bin/libPinController.so 
	sudo rm /usr/lib/libPinController.so



libPinController.so: PinController.o
	@echo "Compiling PinController library."
	sudo g++ -shared bin/PinController.o -o bin/libPinController.so

pulseLight.o: src/pulseLight.cpp
	@echo "Compiling pulseLight.cpp."
	$(CXX) src/pulseLight.cpp -o bin/pulseLight.o

PinController.o: src/PinController.cpp
	@echo "Compiling PinController.cpp."
	$(CXX) src/PinController.cpp -o bin/PinController.o

initializePins.o: src/initializePins.cpp
	@echo "Compiling initializePins.cpp."
	$(CXX) src/initializePins.cpp -o bin/initializePins.o

SetPin.o: src/setPin.cpp
	@echo "Compiling setPin.cpp."
	$(CXX) src/setPin.cpp -o bin/SetPin.o

uninitializePins.o: src/uninitializePins.cpp
	@echo "Compiling uninitializePins.cpp."
	$(CXX) src/uninitializePins.cpp -o bin/uninitializePins.o

setPinDirection.o: src/setPinDirection.cpp
	@echo "Compiling setPinDirection.cpp."
	$(CXX) src/setPinDirection.cpp -o bin/setPinDirection.o

bin/libPinController.so:
	make libPinController.so

readPin.o: src/readPin.cpp
	@echo "Compiling readPin.cpp."
	$(CXX) src/readPin.cpp -o bin/readPin.o

clean:
	sudo rm bin/PulseLight bin/InitializePins bin/SetPin bin/UninitializePins bin/libPinController.so bin/SetPinDirection bin/ReadPin
