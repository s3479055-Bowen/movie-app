class User {

    constructor(email, firstName, lastName, gender, age, dob) {
        this._email = email;
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
        this._dob = dob;
    }

    get email() {
        return this._email;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get gender() {
        return this._gender;
    }

    get age() {
        return this._age;
    }

    get dob() {
        return this._dob;
    }
}

export default User