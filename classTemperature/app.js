class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
    this.fahrenheit = Math.round(celsius * (9 / 5) + 32);
  }
  static fromFahrenheit(fahrenheit) {
    const celsius = Math.round((5 / 9) * (fahrenheit - 32));
    return new Temperature(celsius);
  }
}

const day1 = new Temperature(25);
console.log(day1.celsius);
console.log(day1.fahrenheit);

day1.celsius = 26;
day1.fahrenheit = 67;
console.log(day1.celsius);
console.log(day1.fahrenheit);

const day2 = new Temperature(24);
console.log(day2.celsius);
console.log(day2.fahrenheit);

const day3 = Temperature.fromFahrenheit(88);
console.log(day3.celsius);
console.log(day3.fahrenheit);