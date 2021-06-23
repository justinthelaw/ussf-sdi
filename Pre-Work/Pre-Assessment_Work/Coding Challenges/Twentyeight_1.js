console.clear();

console.log("TITLE: Question_28\n");

console.log("DESCRIPTION: Question #28\n");

console.log("SCRIPT:\n");

const candidate = {
  name: "Jennifer",
  age: 29,
  location: "San Diego",
  skills: ["Excel", "Salesforce", "JavaScript"],
  currentSalary: 55000
}

const jobs = [
  {
     jobTitle: "Software Engineer",
     jobLocation: "Dallas",
     workRemoteAvailable: true,
     skillsRequired: ["Typing", "Organization", "C++", "Python", "JavaScript"],
     salary: 92450
  }, 
  {
     jobTitle: "Pilot",
     jobLocation: "Memphis",
     workRemoteAvailable: false,
     skillsRequired: ["Fly a Plane", "Read maps", "Meteorology", "Time Management"],
     salary: 89200
  }, 

  {
     jobTitle: "Computer Scientist",
     jobLocation: "San Diego",
     workRemoteAvailable: false,
     skillsRequired: ["Typing", "Organization", "C++", "Python", "JavaScript"],
     salary: 89200
  }, 
]

function locationEligibilityChecker(applicant, jobs) {
 let correctJob = [];
 
  for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].jobLocation === applicant.location) {
          for (let j = 0; j < jobs[i].skillsRequired.length; j++) {
              for (let k = 0; k < applicant.skills.length; k++) {
                  if (jobs[i].skillsRequired[j] === applicant.skills[k]) {
                      correctJob.push(jobs[i].jobTitle);
                  }
              }
          }
      }
  }
  
  return correctJob;
}

console.log(locationEligibilityChecker(candidate, jobs));
