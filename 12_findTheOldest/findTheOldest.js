const findTheOldest = function(people) {

    let pLen = people.length

    function age(people) {
        for (let i = 0; i < pLen; i++) {
            if (people[i]['yearOfDeath'] === undefined) {
                const d = new Date()
                let year = d.getFullYear()
                people[i]['yearOfDeath'] = year
            }
            people[i]['age'] = people[i]['yearOfDeath'] - people[i]['yearOfBirth']
        }
    }
    age(people)

    const ordered = people.sort(function(a, b) {
      if (a.age < b.age) {
        return 1;
      } else {
        return -1;
      }
    });

    return people[0]

};

// Do not edit below this line
module.exports = findTheOldest;
