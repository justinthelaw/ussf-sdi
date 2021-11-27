console.clear();

console.log("TITLE: Question_18\n");

console.log("DESCRIPTION: Question #18\n");

console.log("SCRIPT:\n");

let roster = [
  {
    name: "Simone Biles",
    countryRepresenting: "USA",
    sport: "Gymnastics",
    events: ["floor", "balance beam", "rings", "vault"],
    age: 22
  },
  {
    name: "Kohei Uchimura",
    countryRepresenting: "Japan",
    sport: "Gymnastics",
    events: ["vault", "floor", "rings"],
    age: 28,
   },
    {
    name: "Laurie Hernandez",
    countryRepresenting: "USA",
    sport: "Gymnastics",
    events: ["vault", "balance beam", "uneven bars"],
    age: 19,
   },
]

function eventHeadcount(roster) {
    let headCount = {};
 
    for (let i = 0; i < roster.length; i++) {
        for (let j = 0; j < roster[i].events.length; j++) {
            if (headCount[roster[i].events[j]] === undefined) {
                headCount[roster[i].events[j]] = 1
            } else {
                headCount[roster[i].events[j]]++
            }
        }
    }
  
    return headCount;
}

console.log(eventHeadcount(roster));
