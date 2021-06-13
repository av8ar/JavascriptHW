//import {Math} from './Math.js';
function displayHashTable(header, hashTable) {
    let div = document.getElementById("output_div");
    div.innerHTML += "<pre><code>" 
        + header
        + "<br />"
        + toString(hashTable) 
        + "</code></pre>";
    console.log(div);
}

function toString(hashTable) {
    let s = "";
    for(let i = 0; i < hashTable.length; i++) {
        s += "(" + hashTable[i].toString() + ")\n";
    }

    return s;
}

function generateKey(keyLength) {
    let characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let key = "";
    for(let i = 0; i < keyLength; i++) {
        let r = Math.floor(Math.random() * 36);
        key += characters.substring(r,r+1); 
    }
    return key;
}

class MyParent {
    constructor(initName) {
        this.name = initName;
    }
    
    toString() {
        return "name: " + this.name;
    }
}

function main() {
    /** 
    let parent = new MyParent("Joe");
    let text = parent.toString();
    console.log("1: " + text);
    let parentPrototype = Object.getPrototypeOf(parent);
    let obj = new Object();
    Object.setPrototypeOf(obj, parentPrototype);
    obj.name = "Jane";
    text = obj.toString();
    console.log(text);
    text = parent.toString();
    console.log(text);
    */
    

    /*
    let person = new Person("Joe", "Shmo");
    let personPrototype = Object.getPrototypeOf(person);
    Object.setPrototypeOf(obj, personPrototype);
    obj.prototype.salary = 0;
    obj.prototype.toString = function() {
        return this.getFirstName + " " + this.getLastName + " ($" + this.salary + ")" ;
    }
    */
    
    
    // @todo - UPDATE WHERE APPROPRIATE
    let Employee = function(firstName, lastName, salary) {
        Object.assign(this, new Person(firstName,lastName));
        this.salary = salary;
    };
    
    Object.setPrototypeOf(Employee, Person.prototype); //extends
    
    Employee.prototype.toString = function(){
        return this.getFirstName() + " " + this.getLastName + " (" + this.salary + ")";
    }
    
    let hashTable = [];

    let testKey = generateKey(8);
    console.log(testKey);
    hashTable[testKey] = new Person("George", "Harrison");
    hashTable[generateKey(8)] = new Person("Paul", "McCartney");
    hashTable[generateKey(8)] = new Person("Ringo", "Starr");
    hashTable[generateKey(8)] = new Person("Chuck", "Berry");
    hashTable[generateKey(8)] = new Person("Mick", "Jagger");
    hashTable[generateKey(8)] = new Person("Jimi", "Hendrix");
    hashTable[generateKey(8)] = new Person("Roger", "Waters");
    
    let jlKey = generateKey(8);
    hashTable[jlKey] = new Person("John", "Lennon");
    let cwKey = generateKey(8);
    hashTable[cwKey] = new Person("Charlie", "Watts");
    let dgKey = generateKey(8);
    hashTable[dgKey] = new Person("David", "Gilmour");

    // AND DISPLAY THE HASH TABLE
    displayHashTable("After Adding 10 Items", hashTable);

    // NOW TRY GETTING A FEW
    let p = hashTable[jlKey];
    console.log("\nget " + jlKey + ": " + p.toString());
    p = hashTable[cwKey];
    console.log("\nget " + cwKey + ": " + p.toString());
    p = hashTable[dgKey];
    console.log("\nget " + dgKey + ": " + p.toString());

    // NOW LET'S TRY REPLACING THE DATA IN THE ABOVE THREE
    hashTable[jlKey] = new Person("Otis", "Redding");
    hashTable[cwKey] = new Person("Keith", "Richards");
    hashTable[dgKey] = new Person("Bill", "Withers");

    // AND DISPLAY THE HASH TABLE
    displayHashTable("\nAfter Changing 3 Items", hashTable);

    return 0;
}

main();