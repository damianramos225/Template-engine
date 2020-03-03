class Employee {
    constructor(name, id, email, github) {
        this.github = github;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee";
    }
}



module.exports = Employee;


