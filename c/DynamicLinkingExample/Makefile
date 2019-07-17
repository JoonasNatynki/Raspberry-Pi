MyFunc: libMyFunc.so Main.o
	g++ -o MyFunc main.o /usr/local/lib/libMyFunc.so

Main.o: main.cpp
	g++ -std=c++11 -c main.cpp

MyFunc.o: MyFunc.cpp
	g++ -std=c++11 -c MyFunc.cpp

libMyFunc.so: MyFunc.o
	g++ -shared -o/usr/local/lib/libMyFunc.so MyFunc.o

clean:
	rm *.o MyFunc /usr/local/lib/libMyFunc.so
