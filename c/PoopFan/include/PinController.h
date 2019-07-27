#include <vector>

typedef unsigned char uint8_t;

static const std::vector<uint8_t> ValidPins = {2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26};

enum class EState
{
	Low,
	High
};

enum class EDirection
{
	In,
	Out
};

class PinController
{
	public:
		static bool SetPinValue(int pinNumber, EState pinValue);
		static bool SetPinDirection(uint8_t pinNumber, EDirection pinDirection);
		static void InitializePins();
		static int ReadPin(uint8_t pinNumber);

	private:

		static bool IsValidPin(int pinNumber);
};
