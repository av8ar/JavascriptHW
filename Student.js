class Student extends Person {
    constructor(initFirstName, initLastName, initGpa) {
      super(initFirstName, initLastName);
      this.gpa = initGpa;
    }
    
    getGPA() {
        return this.gpa;
    }
    
    setGPA(initGpa) {
        this.gpa = initGpa;
    }
    
    toString() {
        return this.firstName + " " + this.lastName +  " (" + this.gpa + ")";
    }
}