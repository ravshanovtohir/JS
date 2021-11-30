//======================Getter vs Setter================================//

//Masala shartlari
//User class tuziladi
/*
id,
firstName,->o'zgaradi
lastName,->o'zgaradi
age,
email,->o'zgaradi
password->o'zgaradi
*/



class Person {
    constructor(id, firstName, lastName, age, email, password) {
        this._id = this.id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._email = email;
        this._password = password
    }

    set firstName(fN) {
        this._firstName = fN;
    }

    set lastName(lN) {
        this._lastName = lN;
    }

    set email(eml) {
        this._email = eml
    }

    set password(psw) {
        this._password = psw
    }



    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }
    get email() {
        return this._email
    }
    get password() {
        return this._password
    }

}

let new_person = new Person(12544, "Ibo", "Ibrohimov", 18, "asdfga@gamil.com", "845121545")

// console.log(new_person.firstName);

// new_person.firstName = 'Ali'

// console.log(new_person.firstName);


// console.log("eski   -->", new_person.email);

// new_person.email = "hjkgakvhvf@gmail.com"

// console.log("yangi  -->", new_person.email);




//===========================Destruksiya=============================//



let arr = [{
        name: 'John',
        address: 'Chilonzor',
        location: {
            x: 15,
            y: 56
        }
    },
    'John', [1, 2, 3, 4]
]

let [{ location: { x, y } }] = arr

// console.log(x, "\t", y);