function Car(model, milesPerGallon){
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
}

Car.prototype.fill = function(gallons){
    this.tank += gallons;
}

Car.prototype.drive = function(distance) {
    const maxDistance = this.tank * this.milesPerGallon;
    if (distance <= maxDistance){
        this.odometer += distance;
        this.tank -= distance / this.milesPerGallon;
        return `Vehicle has ${this.odometer} miles and ${Math.round(this.tank)}`
    } else {
        this.odometer += maxDistance;
        this.tank = 0;
        return `Vehicle ran out of gas after driving ${maxDistance} miles. Vehicle now has ${this.odometer} miles on the odometer and ${this.tank} gallons of gas.`;
    }
}