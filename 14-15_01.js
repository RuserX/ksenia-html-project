// Получение фамилии
var surname = document.getElementById("surname").value;
console.log("Фамилия:", surname);

// Получение имени
var name = document.getElementById("name").value;
console.log("Имя:", name);

// Получение года рождения
var birthdate = document.getElementById("birthdate").value;
var birthYear = new Date(birthdate).getFullYear();
console.log("Год рождения:", birthYear);
