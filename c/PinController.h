enum class EState
{
	Low,
	High
};

class PinController
{
	public:
		static void SetPinValue(int pinNumber, EState pinValue);
		static void InitializePins();
};
