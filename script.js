// Complete the js code
function Car(make, model) {
	Car(make,model){
	this.make = make;
	this.model = model;
	}

	getMakeModel(){
		return `${make} ${model}`;
	}
}

function SportsCar(make, model, topSpeed) extends Car {
	SportsCar(make,model,topSpeed){
		super(make,model);
		this.make = make;
		this.model = model;
		this.topSpeed = topSpeed;
	}
	getTpSpeed(){
		return topSpeed;
	}
}
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel());
console.log(car.getTopSpeed());

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
