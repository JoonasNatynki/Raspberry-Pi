#include <stdio.h>

int main()
{
	FILE * file;
	char gpio21[] = "21";
	char gpio04[] = "04";
	char gpio18[] = "18";
	char gpio17[] = "17";
	char gpio27[] = "27";

	file = fopen("/sys/class/gpio/unexport", "w+");
	fwrite(gpio21, 1, sizeof(gpio21), file);
	fclose(file);

	file = fopen("/sys/class/gpio/unexport", "w+");
	fwrite(gpio04, 1, sizeof(gpio04), file);
	fclose(file);

	file = fopen("/sys/class/gpio/unexport", "w+");
	fwrite(gpio18, 1, sizeof(gpio18), file);
	fclose(file);

	file = fopen("/sys/class/gpio/unexport", "w+");
	fwrite(gpio17, 1, sizeof(gpio17), file);
	fclose(file);

	file = fopen("/sys/class/gpio/unexport", "w+");
	fwrite(gpio27, 1, sizeof(gpio27), file);
	fclose(file);

	printf("GPIOs closed!");
	
	return (0);
}
