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
    let keys = Object.keys(hashTable); //array of keys for each object
    let s = "[\n";
    for(let i = 0; i < keys.length; i++) {
        s += " (" + hashTable[keys[i]].toString() + ")\n";
    }
    s += "]";
    
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

    
    
    // @todo - UPDATE WHERE APPROPRIATE
    let Employee = function(firstName, lastName, salary) {
        Object.assign(this, new Person(firstName,lastName));
        this.salary = salary;
    };
    
    //Object.setPrototypeOf(Employee, Person.prototype); //extends
    Employee.prototype = new Person;

    Employee.prototype.toString = function(){
        return this.key + this.firstName + " " + this.lastName + " (" + this.salary + ")";
    }
    
    let hashTable = [];

    let testKey = generateKey(8);
    console.log(testKey);
    hashTable[testKey] = new Student("George", "Harrison", 4);
    hashTable[generateKey(8)] = new Employee("Paul", "McCartney", 80000);
    hashTable[generateKey(8)] = new Employee("Ringo", "Starr", 40000);
    hashTable[generateKey(8)] = new Employee("Chuck", "Berry", 100000);
    hashTable[generateKey(8)] = new Student("Mick", "Jagger", 3.5);
    hashTable[generateKey(8)] = new Student("Jimi", "Hendrix", 3.6);
    hashTable[generateKey(8)] = new Employee("Roger", "Waters", 90000);
    
    
    let jlKey = generateKey(8);
    hashTable[jlKey] = new Student("John", "Lennon", 3.8);
    let cwKey = generateKey(8);
    hashTable[cwKey] = new Student("Charlie", "Watts", 3.1);
    let dgKey = generateKey(8);
    hashTable[dgKey] = new Employee("David", "Gilmour", 120000);

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
    hashTable[jlKey] = new Student("Otis", "Redding", 3.5);
    hashTable[cwKey] = new Student("Keith", "Richards", 3.1);
    hashTable[dgKey] = new Student("Bill", "Withers", 3.4);

    // AND DISPLAY THE HASH TABLE
    displayHashTable("\nAfter Changing 3 Items", hashTable);

    return 0;
}

main();