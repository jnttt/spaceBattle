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
            alert("You've been hit! Hull: "+ussAssembly.hull)
        } else {
            alert("The aliens missed!");
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
            alert("Direct hit!");
         }
         else {
             alert("You missed!");
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

function start() {
    // if(confirm("Press OK to attack!")){
        ussAssembly.attack();
        if(alienArr[0].hull <= 0 && alienArr.length > 0){
            alienArr.shift();
            alert("KABOOM! You have defeated an alien ship! There are "+alienArr.length +" alien ships left.");
            console.log(alienArr);
            if (alienArr.length == 0){
                alert("ALL ALIEN SHIPS HAVE BEEN DEFEATED! YOU HAVE SAVED EARTH!")
                window.location.reload();
            }else if(confirm("Press OK to retreat.")){
                alert("Retreating...");
                window.location.reload();
            }
        }else if(alienArr[0].hull > 0){
            alienArr[0].alienAttack();
            if(ussAssembly.hull <= 0){
                alert("THE ALIENS HAVE DEFEATED YOU!");
                window.location.reload();
            }
        }
    }
    
// }
console.log(alienArr);
console.log(ussAssembly);
// ussAssembly.attack();
// alienArr[0].alienAttack();
// console.log(alienArr);