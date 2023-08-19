function HouseKeeper(yearsOfExperience, name, age) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.age = age;
}

//run this code and create the housekeeper

var houseKeeper1 = new HouseKeeper(9, "Tommy", 22);

console.log(houseKeeper1.name);