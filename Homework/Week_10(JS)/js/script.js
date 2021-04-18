
class User {
	surname;
	firstName;
	lastName;
	email;
	phone;
	yearOfAdmissionToUniversity;
	yearOfStartOfWork;
	userYearWork;
	userYearUniversity;
	userYear;
	
	constructor(surname, firstName, lastName, email, phone, yearOfAdmissionToUniversity, yearOfStartOfWork){
		this.surname = surname;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.yearOfAdmissionToUniversity = yearOfAdmissionToUniversity;
		this.yearOfStartOfWork = yearOfStartOfWork;
	}
	//Метод для вивода повного імені користувача
	getFullName(){
		let fullName = `Створено - ${this.surname} ${this.firstName} ${this.lastName};\nEmail - ${this.email};\nPhone - ${this.phone};`;
		return fullName;
	}
	//Метод ля підрахунку робочого стажу або навчального
	yearUser(x){
		let yearWork = new Date(x);
		let nowDate = new Date();
		let year = nowDate - yearWork;
		this.userYear = 0;
            while (year > 31536000000) {
                year -= 31536000000;
                this.userYear++;
            }
		return this.userYear;
	}
}

class Teacher extends User {
	//Метод для вивода робочого стажу користувача
	getStanding(userYearWork){
		console.log(`${this.surname} ${this.firstName} ${this.lastName} розпочав роботу у ${this.yearOfStartOfWork} році`);
		let userExperience = `Стаж ${this.surname} ${this.firstName} ${this.lastName} складає - ${userYearWork} повних років`;
		return userExperience;
	}
}

class Student extends User {
	//Метод для вивода навчального стажу
	getCourse(userYearUniversity, userYearWork){
		console.log(`${this.surname} ${this.firstName} ${this.lastName} вступив до вузу у ${this.yearOfAdmissionToUniversity} році`);
		let experience = `Навчальний стаж ${this.surname} ${this.firstName} ${this.lastName} складає - ${userYearUniversity - userYearWork} повних років`;
		return experience;
	}
}

//Масив користовачів
let arrUsers = [
	{
		surname: "Ivanishin",
		firstName: "Oleg",
		lastName: "Yuriyovych",
		email: "ivanishin9891@gmail.com",
		phone:	"+380974695637",
		yearOfAdmissionToUniversity: "2007",
		yearOfStartOfWork: "2012"	
	},
	{
		surname: "Ivanov",
		firstName: "Ivan",
		lastName: "Yuriyovych",
		email: "ivan@gmail.com",
		phone:	"+380974699637",
		yearOfAdmissionToUniversity: "2001",
		yearOfStartOfWork: "2003"	
	}
];

for(let i = 0; i < arrUsers.length; i++){	
	//Створюємо користувача worker
	const worker = new Teacher(arrUsers[i].surname, arrUsers[i].firstName, arrUsers[i].lastName, arrUsers[i].email, arrUsers[i].phone, arrUsers[i].yearOfAdmissionToUniversity, arrUsers[i].yearOfStartOfWork);
	//Виводим повне ім'я користувача
	console.log(worker.getFullName());
	//Виводим робочий стаж користувача
	console.log(worker.getStanding(worker.yearUser(worker.yearOfStartOfWork)));
	
	console.log("\n");
	
	const student = new Student(arrUsers[i].surname, arrUsers[i].firstName, arrUsers[i].lastName, arrUsers[i].email, arrUsers[i].phone, arrUsers[i].yearOfAdmissionToUniversity, arrUsers[i].yearOfStartOfWork);
	//Виводим повне ім'я користувача
	console.log(student.getFullName());
	//Виводим навчальний стаж користувача
	console.log(student.getCourse(student.yearUser(worker.yearOfAdmissionToUniversity), student.yearUser(worker.yearOfStartOfWork)));
	
	console.log("\n");
	console.log("\n");
	
};