class Student extends Person {
    constructor(initFirstName, initLastName, initGpa) {
        this.gpa = initGpa;
    }
    
    getGPA() {
        return this.gpa;
    }
    
    setGPA(initGpa) {
        this.gpa = initGpa;
    }
    
    toString() {
        return this.getFirstName() + " " + this.getLastName + " (" + this.gpa + ")";
    }
}