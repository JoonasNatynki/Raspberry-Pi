#include <stdio.h>
#include <string.h>
#include <unistd.h>

int main()
{
	FILE * file;
	char gpio21[] = "21";
	char gpio04[] = "4";
	char gpio17[] = "17";
	char gpio27[] = "27";
	char gpio18[] = "18";

	char output[] = "out";

	char filePathExport[50] = "/sys/class/gpio/export";
	
	void openGPIO(char gpio[])
	{
		file = fopen(filePathExport, "w+");
		fwrite(gpio, 1, sizeof(gpio), file);
	       	fclose(file);
	}

	openGPIO(gpio04);

	openGPIO(gpio21);

	openGPIO(gpio17);

	openGPIO(gpio27);

	openGPIO(gpio18);

	sleep(1);
	
	file = fopen("/sys/class/gpio/gpio21/direction", "w+");
	fwrite(output, 1, sizeof(output), file);
	fclose(file);

	printf("GPIO pins opened!");
	
	return (0);
}
