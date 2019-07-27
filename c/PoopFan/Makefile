CXX = sudo g++ -std=c++11 -I include/ -c
CXXFLAG = -Wall

all: PoopFan

PoopFan: poopFan.o
	g++ $(CXXFLAGS) bin/poopFan.o -lPinController -o bin/PoopFan

poopFan.o: src/poopFan.cpp
	$(CXX) src/poopFan.cpp -o bin/poopFan.o
