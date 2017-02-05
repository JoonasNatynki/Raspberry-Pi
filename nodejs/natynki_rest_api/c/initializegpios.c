#include <stdio.h>
#include <string.h>

int main()
{
	FILE * file;
	char gpio21[] = "21";
	char gpio04[] = "4";
	char gpio17[] = "17";
	char gpio27[] = "27";
	char gpio18[] = "18";

	char output[] = "out";
	char high[] = "1";
	char low[] = "0";

	char filePathExport[50] = "/sys/class/gpio/export";

	void openGPIO(char gpio[])
	{
		file = fopen(filePathExport, "w+");
		fwrite(gpio, 1, sizeof(gpio), file);
		fclose(file);
	}

	openGPIO(gpio04);

	//file = fopen("/sys/class/gpio/export", "w+");
	//fwrite(gpio04, 1, sizeof(gpio04), file);
	//fclose(file);

	file = fopen("/sys/class/gpio/export", "w+");
	fwrite(gpio21, 1, sizeof(gpio21), file);
	fclose(file);

	file = fopen("/sys/class/gpio/export", "w+");
	fwrite(gpio17, 1, sizeof(gpio17), file);
	fclose(file);

	file = fopen("/sys/class/gpio/export", "w+");
	fwrite(gpio27, 1, sizeof(gpio27), file);
	fclose(file);

	file = fopen("/sys/class/gpio/export", "w+");
	fwrite(gpio18, 1, sizeof(gpio18), file);
	fclose(file);
	
	
	
	
	
	file = fopen("/sys/class/gpio/gpio21/direction", "w+");
	fwrite(output, 1, sizeof(output), file);
	fclose(file);

	file = fopen("/sys/class/gpio/gpio27/direction", "w+");
	fwrite(output, 1, sizeof(output), file);
	fclose(file);

	file = fopen("/sys/class/gpio/gpio4/direction", "w+");
	fwrite(output, 1, sizeof(output), file);
	fclose(file);

	file = fopen("/sys/class/gpio/gpio17/direction", "w+");
	fwrite(output, 1, sizeof(output), file);
	fclose(file);

	file = fopen("/sys/class/gpio/gpio18/direction", "w+");
	fwrite(output, 1, sizeof(output), file);
	fclose(file);

	file = fopen("/sys/class/gpio/gpio21/value", "w+");
	fwrite(high, 1, sizeof(high), file);
	fclose(file);

	printf("GPIO pins opened!\n");
	
	return (0);
}
