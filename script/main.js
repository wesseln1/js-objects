console.log("Hello world")

const hamster = {
    name: "Hammond",
    fluffy: true,
    age: 40,
    legs: 3,
    children: ["Captain Hook", "Peter Pan", "Sally"],
    nickname: "Ham Sir",
    chewing: function chew(what) {
        console.log("Hammond is chewing on a " + what);
    },
    color: "black",
}


// Lightning exercise 1
const mother = {
    name: "Wendy",
    age: 46,
    hairColor: "brown",
    legs: 2,
    height: "5ft 5inch",
    nickname: "Momma bear"
}
const father = {
    name: "Peter",
    age: 46,
    hairColor: "Bald af",
    legs: 2,
    height: "5ft 4.5inch",
    nickname: "popsicle"
}
const sister = {
    Taylor: {
        age: 25,
        hairColor: "brown",
        legs: 2,
        height: "5ft 5inch",
        nickname: "T"
    },

    Michelle: {
        age: 22,
        hairColor: "blonde",
        legs: 2,
        height: "5ft 8inch",
        nickname: "Michael the drug dealer",
        death: "april 2019"
    }
}
const brother = {
    name: "Nick",
    age: 22,
    hairColor: "black",
    legs: 2,
    height: "5ft 10inch",
    nickname: "Junior"
}

const familyMembers = [mother, father, brother, sister]
console.log("Here is your family!", familyMembers)

for (let i = 0; i < hamster.children.length; i++) {
    console.log(`Hamster child: ${i + 1} is ${hamster.children[i]}`);
}

hamster.children.forEach((item, index) => {
    console.log(`Hamster child: ${index}: ${item}`)    
});


// lightning excerise #2
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// part 1
console.log(`The Empire State building is ${empireStateBuilding.stories} stoires, ${empireStateBuilding.height}ft tall, ${empireStateBuilding.eastWestLength}ft wide, ${empireStateBuilding.northSouthLength}ft long, for a total of ${empireStateBuilding.squareFeet}sqFt.`)

// part 2
const address = empireStateBuilding["address"];
const constructionDate = empireStateBuilding["constructionDate"];
const cost = empireStateBuilding["cost"];
const owner = empireStateBuilding["owner"];
const architect = empireStateBuilding["architect"];

console.log(`Located at ${address}, it cost ${owner},  ${cost} to build this massive skyscrapper. Built and designed by ${architect} in ${constructionDate}.`)

// lightning exercise #3

// part 1
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
console.log("PART 1 OUTPUT");
for(let i = 0; i < nashvilleSoftwareSchool.instructors.partTime.length; i++){
    console.log(`${nashvilleSoftwareSchool.instructors.partTime[i]} `);
}
for(let i = 0; i < nashvilleSoftwareSchool.instructors.fullTime.length; i++){
    console.log(`${nashvilleSoftwareSchool.instructors.fullTime[i]} `)
}

// part 2
console.log("PART 2 OUTPUT");

const andy = nashvilleSoftwareSchool.instructors.fullTime[4];
const zoe = nashvilleSoftwareSchool.instructors.partTime[0];

console.log(`${andy} ${zoe}`)