//Space battle oop lab

class Ship {
    constructor(hull,firepower,accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

class AlienShip extends Ship {
    constructor(hull, firepower, accuracy){
        super(hull, firepower, accuracy);
    }
    alienAttack(){
        if(this.accuracy>Math.random()){
            ussAssembly.hull -= this.firepower;
            console.log("You've been hit! Hull: "+ussAssembly.hull)
        } else {
            console.log("The aliens have missed!");
        }
    }
}

class OurShip extends Ship {
    constructor(hull,firepower,accuracy){
        super(hull,firepower,accuracy);
    }
    attack(){
        if (this.accuracy > Math.random()) {
            alienArr[0].hull -= this.firepower;
            console.log("Direct hit!");
         }
         else {
             console.log("You missed!");
         }
    }
}

const alienArr = [];
for (let i = 0; i < 6; i++){
    let randHull = Math.floor(Math.random()*(6 - 3)+3);
    let randFP = Math.floor(Math.random()*(4 - 2 )+2);
    let randAcc = (Math.random() * (.8 - .6)) + .6;
    alienArr.push(new AlienShip(randHull,randFP,randAcc.toFixed(1)));
}

const ussAssembly = new OurShip(20,5,.7);

console.log(alienArr);
console.log(ussAssembly);
ussAssembly.attack();
alienArr[0].alienAttack();