function Error() {
	
    var value = document.getElementById("Error").value;
    console.log(value);

    if (isNaN(value) || value == 0) {
		message.innerHTML = "Input Invalid";
        throw new Error("Invalid Input");
    } 
    else {
        console.log("Valid Input");
    }
    document.location.reload(true);
}


const student1 = {
    name: "Sakshi Kharche",
    className: "D15A",
    rollNo: 36,
};

console.log("Student 1: ", student1);

class Student {
    constructor(uname, className, rollNo) {
        this.uname = uname;
        this.className = className;
        this.rollNo = rollNo;
    }
}

const student2 = new Student("Sakshi Kharche", "D15A", 36);
console.log("Student 2: ", student2);

Student.prototype.college = "VESIT";
console.log("Student 2: ", student2);

document.getElementById("printName").innerHTML = student2.uname;
document.getElementById("printClass").innerHTML = student2.className;
document.getElementById("printRoll").innerHTML = student2.rollNo;