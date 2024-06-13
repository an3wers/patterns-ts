interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObserver(): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  constructor() {}

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }
  public removeObserver(o: Observer): void {
    let index: number = this.observers.indexOf(o);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  public notifyObserver(): void {
    for (let i = 0; i < this.observers.length; i++) {
      let observer: Observer = this.observers[i];
      observer.update(this.temperature, this.pressure, this.humidity);
    }
  }

  public measurementsChanged() {
    this.notifyObserver();
  }

  public getTemperature() {
    return this.temperature;
  }

  public getHumidity() {
    return this.humidity;
  }

  public getPressure() {
    return this.pressure;
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number,
  ) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }
}

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number = 0;
  private humidity: number = 0;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  display(): void {
    console.log(this.temperature, this.humidity);
  }
  // update(temperature: number, humidity: number, pressure: number): void {
  //   this.temperature = temperature;
  //   this.humidity = humidity;
  //   this.display();
  // }
  update(): void {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }
}
