const findTheOldest = function(people) {
    let peopleBirthYear = people.map(person => person.yearOfBirth)  
    let peopleDeathYear = people.map(person2 => person2.yearOfDeath)
    
    let oldestAge = 0

    for (let i = 0; i < peopleBirthYear.length; i++) {
        if (peopleDeathYear[i] === undefined) {peopleDeathYear[i] = 2022}
        let age = peopleDeathYear[i] - peopleBirthYear[i]
        if (age > oldestAge) {
            oldestPersonIndex = i
            oldestAge = age
        }
    }

    return people[oldestPersonIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
