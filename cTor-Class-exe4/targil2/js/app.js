class Computer {
    constructor(procMem,diskMem,procName,price,warrenty) {
        this._procName = procName;
        this.setProcMem(procMem);
        this.setDiskMem(diskMem);
        this.setPrice(price);
        this.setWarrenty(warrenty);
    }

    printHeadphonesOffer() {
        return 'Buy 1 Headphone for the price of 2 :)';
    }
    toString() {
        let str = "";
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                str += `${i}: ${this[i]}\n`
            }
        }
        return str;
    }
    setProcMem(val) {
        if ((val < 4) || (val > 16)) {
            alert('Processor memory is out of range')
        } else {
            this._procMem = val;
        }
    }
    setDiskMem(val) {
        if ((val < 200) || (val > 3000)) {
            alert('Disk memory is out of range')
        } else {
            this._diskMem = val;
        }
    }
    setPrice(val) {
        if ((val < 800) || (val > 20000)) {
            alert('Price is out of range')
        } else {
            this._price = val;
        }
    }
    setWarrenty(val) {
        if ((val < 0) || (val > 5)) {
            alert('Warrenty is out of range')
        } else {
            this._warrenty = val;
        }
    }
}


class Desktop extends Computer {
    constructor(procMem,diskMem,procName,price,warrenty,isMouseWireless,scrSize) {
        super(procMem,diskMem,procName,price,warrenty);
        this.setIsMouseWireless(isMouseWireless);
        this.setScrSize(scrSize);
    }
    toString() {
        let str = "";
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                str += `${i}: ${this[i]}\n`
            }
        }
        return str + super.toString();
    }
    setIsMouseWireless(val) {
        if (val) {
            this._isMouseWireless = 'is wireless';
        } else {
            this._isMouseWireless = 'is wired';
        }
    }
    setScrSize(val) {
        if ((val < 11) || (val > 18)) {
            alert('Screen Size is out of range')
        } else {
            this._scrSize = val;
        }
    }
}


class Laptop extends Computer {
    constructor(procMem,diskMem,procName,price,warrenty,hoursCharge,batteryPercentage,isTouchScr) {
        super(procMem, diskMem, procName, price, warrenty);
        this.setHoursCharge(hoursCharge);
        this.setBatteryPercantage(batteryPercentage);
        this.setIsTouchScr(isTouchScr);
    }

    printOffer() {
        alert(`
        Buy a laptop bag, get a free laptop!
        ${super.printHeadphonesOffer()}
        `)
    }

    computerCharge(){
        alert("Computer Battery charged fully!!")
    }

    toString() {
        let str = "";
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                str += `${i}: ${this[i]}\n`
            }
        }
        return str + super.toString();
    }

    setIsTouchScr(val) {
        if (val) {
            this._isScrTouch = 'is touch';
        } else {
            this._isScrTouch = 'is not touch';
        }
    }
    setHoursCharge(val) {
        if ((val < 1) || (val > 9)) {
            alert('battery charge hourse are out of range')
        } else {
            this._hoursCharge = val;
        }
    }
    setBatteryPercantage(val) {
        if ((val < 0) || (val > 100)) {
            alert('battery power is out of range')
        } else if(val == 100) {
            this.computerCharge()
        } else {
            this._batteryPercentage = val;
        }
    }
}

function executeActions(object) {
    let funcObj = Object.getOwnPropertyNames(object.__proto__);
    console.log(funcObj);
    for (let i in funcObj) {
       if (funcObj.hasOwnProperty(i)) {
            switch (funcObj[i]) {
                case 'constructor':
                    break;
                case 'toString':
                    alert(object[funcObj[i]]());
                   break;
                default:
                    object[funcObj[i]]()
                    break;
            }
        }
    }
}

let computerArray = [
    new Laptop(8,500,'i7',8000,5,9,100,true),
    new Desktop(4,500,'i3',4000,1,true,13)
];


for (let item of computerArray) {
    executeActions(item);
}




