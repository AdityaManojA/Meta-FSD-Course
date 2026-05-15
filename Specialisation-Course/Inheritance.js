class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train{
    constructor(passenger,highSpeedOn,color,lightsOn){
        super(color, lightsOn);//to correctly initialise the extended properties of 1st class
        this.passenger=passenger;
        this.highSpeedOn=highSpeedOn;
    }

     toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    
    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log("Lights are on !")
    }
}

var hSP=new HighSpeedTrain(12,false,'blue',true)
hSP.toggleHighSpeed();
hSP.toggleLights();
hSP.getSelf();


