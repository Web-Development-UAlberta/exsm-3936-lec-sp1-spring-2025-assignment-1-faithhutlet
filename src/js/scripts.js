async function main() {
 class Car{
  constructor(make, model, year, engine) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.odometer = 0;
    this.engine = new engine(engine);
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
}
