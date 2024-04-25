
const Student = {
    name: "", 

    
    printDetails() {
        console.log(`"Hello, the student is ${this.name}"`);
    }
};

const mithunStudent = Object.create(Student);
mithunStudent.name = "Mithun"; 

mithunStudent.printDetails(); 
