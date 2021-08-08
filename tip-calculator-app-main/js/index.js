class TipCalculatorResult {
  #tipPerPerson;
  #totalPerPerson;

  constructor(tipPerPerson, totalPerPerson) {
    this.#tipPerPerson = tipPerPerson;
    this.#totalPerPerson = totalPerPerson;
  }

  get tipPerPerson() {
    return this.#tipPerPerson;
  }

  get totalPerPerson() {
    return this.#totalPerPerson;
  }
}

class TipCalculator {
  #billAmount;
  #tipPercent;
  #numberOfPeople;

  constructor() {
    this.#numberOfPeople = 1;
  }

  set billAmount(billAmount) {
    this.#billAmount = billAmount;
  }

  set tipPercent(tipPercent) {
    this.#tipPercent = tipPercent;
  }

  set numberOfPeople(numberOfPeople) {
    this.#numberOfPeople = numberOfPeople;
  }

  calculateTip() {
    if (this.#numberOfPeople > 0 && this.#billAmount > 0) {
      const billAmountPerPerson = this.#billAmount / this.#numberOfPeople;
      const tipPerPerson = billAmountPerPerson * this.#tipPercent;
      const totalPerPerson = billAmountPerPerson + tipPerPerson;

      return new TipCalculatorResult(tipPerPerson, totalPerPerson);
    }
    return new TipCalculatorResult(0, 0);
  }
}

const context = {
  calculator: new TipCalculator(),
  billAmountControl: document.forms["tip-form"].elements["bill-amount"],
  tipControl: document.forms["tip-form"].elements["tip-percent"],
  customTipControl: document.forms["tip-form"].elements["custom-tip"],
  personControl: document.forms["tip-form"].elements["num-people"],
  resetControl: document.forms["tip-form"].elements["reset"],
  totalPerPersonOutput: document.querySelector("#total-per-person"),
  tipPerPersonOutput: document.querySelector("#tip-per-person"),
  form: document.forms["tip-form"],
};

const calculateTip = () => {};

const main = () => {
  setInterval(() => {
    console.log("tick");
    const {
      billAmountControl,
      tipControl,
      customTipControl,
      calculator,
      personControl,
    } = context;
    if (personControl.value === "" || parseInt(personControl.value) <= 0) {
      context.personControl.classList.add("error");
      return;
    } else if (
      parseInt(personControl.value) >= 0 &&
      personControl.classList.contains("error")
    ) {
      personControl.classList.remove("error");
    }
    calculator.billAmount = billAmountControl.value;
    calculator.numberOfPeople = personControl.value;
    calculator.tipPercent = tipControl.value || customTipControl.value / 100;
    const result = calculator.calculateTip();
    context.tipPerPersonOutput.innerText =
      "$" + result.tipPerPerson.toFixed(2) || "$0.00";
    context.totalPerPersonOutput.innerText =
      "$" + result.totalPerPerson.toFixed(2) || "$0.00";
  }, 250);

  context.billAmountControl.onkeypress = (event) => {
    event.preventDefault();
    const { key, target } = event;
    const value = parseFloat(target.value) * 100 || 0.0;
    const string = value + key;
    const amount = (parseFloat(string) / 100).toFixed(2);
    context.billAmountControl.value = amount;
  };

  context.customTipControl.onfocus = () => {
    context.tipControl.forEach((e) => {
      e.checked = false;
    });
  };
};

main();
