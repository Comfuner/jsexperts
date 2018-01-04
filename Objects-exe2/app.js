(function(){
    let student = {
        fName:  "Elijahu",
        lName:  "Malka",
        address:   "Rehovot",
        grades: [],
        addGrade: function(grade) {
           this.grades.push(grade)
        },
        calcAvg: function() {
            return this.grades.reduce((a,b) => a + b) / this.grades.length;
        }

    };
    student.__proto__.toString = function() {
        return `
        Full Name: ${this.fName} ${this.lName}
        Address: ${this.address}
        Grades: ${this.grades}
        Grades Average: ${this.calcAvg()}
        `
    };

    student.addGrade(80);
    student.addGrade(90);
    student.addGrade(70);
    student.addGrade(80);
    student.addGrade(90);

    window.alert(student);
})();