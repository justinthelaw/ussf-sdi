console.clear();

console.log("TITLE: Question_16\n");

console.log("DESCRIPTION: Question #16\n");

console.log("SCRIPT:\n");

let gymnasticOlympicEventRoster = [
  { 
    event: "floor",
    athletes: [ 
      { name: "Alexandria", country: "USA" }, 
      { name: "Jason", country: "Spain" }, 
      { name: "Jan", country: "South Africa" }, 
      { name: "Morgan", country: "USA" }
    ]
  },
  {  
    event: "vault",
    athletes:  [ 
      { name: "Paul", country: "Russia" }, 
      { name: "Daniel", country: "Spain" }
    ]
  },
  {  
    event: "balance beam",
    athletes: [
      { name: "Maddie", country: "Croatia" }, 
      { name: "Ana", country: "Denmark" }
    ]
  },
  {  
    event: "uneven bars",
    athletes: [
      { name: "Meredith", country: "England" }, 
      { name: "Max", country: "England" }
    ]
  },
  {  
    event: "pommel horse",
    athletes: [
      { name: "Natalie", country: "South Africa" }, 
      { name: "Zeb", country: "Indonesia" }
    ]
  },
]

function athletesCompetingInGivenEvent(event, eventRoster) {
    let eventAthletes = [];
    
    for (let i = 0; i < eventRoster.length; i++) {
        if (eventRoster[i].event === event) {
            for (let j = 0; j < eventRoster[i].athletes.length; j++) {
                eventAthletes.push(eventRoster[i].athletes[j].name);
            }
        }
    }
    return eventAthletes
}

console.log(athletesCompetingInGivenEvent("floor", gymnasticOlympicEventRoster ));
