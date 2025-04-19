async function main() {

 class Car{
  constructor(make, model, year, cylinders) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.odometer = 0;
    this.engine = new Engine(cylinders);
  }

  startEngine(){
    this.engine.start();
  }
  stopEngine(){
    this.engine.stop();
  }

  drive(distance){
    if (!this.engine.running){
      output("Engine not running.");
    }
    this.odometer += distance;
  }
 }
  class Engine{
    constructor(cylinders){
      this.cylinders = cylinders;
      this.running = false;
    }
  
    start(){
      this.running = true;
    }
  
    stop(){
      this.running = false;
    }

 }

 const myCar = new Car("Jeep", "Liberty", 2004, 6);
 myCar.startEngine();
 myCar.drive(100);
 myCar.stopEngine();
 myCar.startEngine();
 myCar.drive(50);
 myCar.stopEngine();

 output('Odometer reading: ${myCar.odometer}km');
}
