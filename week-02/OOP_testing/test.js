class ToDoList {
  constructor (items = [], totalTime = 0) {
      this.items = items;
      this.totalTime = totalTime;
  }

  addToDo (ToDo, dueDate) {
      ToDo.dueDate = dueDate;
      this.items.push(ToDo);
      this.totalTime += ToDo.time;
  }

  getFormattedToDoList () {
      let formattedList = [];
      this.items.forEach(element => {
          formattedList.push(`${element.name} - ${element.time} minutes`);
      })
      return formattedList;
  }

  getDueDates () {
      let dueDatesList = [];
      this.items.forEach(element => {
          if (element.dueDate === undefined) {
              dueDatesList.push(`${element.name} - due Monday`);
          } else {
              dueDatesList.push(`${element.name} - due ${element.dueDate}`);
          }
      })
      return dueDatesList;
  }

  urgentItems () {
      let urgentList = [];
      this.items.forEach(element => {
          if (element.urgent) {
              urgentList.push(`${element.name} - ${element.time} minutes - due ${element.dueDate}`)
          } else {return}
      })
      return urgentList;
  }
}

// var assert = require('assert');

// describe('ToDoList', () => {
//   it('gets initialized without todo items or a total time', () => {
//     let list = new ToDoList()

//     expect((list.items).length).to.equal(0)
//     expect(list.totalTime).to.equal(0)
//   })
// })

// //NOTE: The "ToDo" class is here to show you the shape of eat "ToDo" item.
// class ToDo {
//   constructor(name, time, urgent) {
//     this.name = name
//     this.time = time
//     this.urgent = urgent
//   }
// }

// it('allows you to add todo items to the list', () => {
//     let laundry = new ToDo('lauandry', 75)
//     let dishes = new ToDo('dishes', 20)
//     let list = new ToDoList()

//     list.addToDo(laundry)
//     expect(list.totalTime).toEqual(75)

//     list.addToDo(dishes)
//     expect(list.totalTime).toEqual(95)
//  })

//  it('allows you to display a list of all todo items and how long they will take', () => {
//   let groceryShopping = new ToDo('grocery shopping', 90)
//   let yardWork = new ToDo('yard work', 120)
//   let list = new ToDoList()

//   expect(list.getFormattedToDoList()).toEqual([])

//   list.addToDo(groceryShopping)
//   list.addToDo(yardWork)
//   expect(list.getFormattedToDoList()).toEqual(['grocery shopping - 90 minutes', 'yard work - 120 minutes'])
// })

// it('allows you to specify and save which day of the week this todo item should be completed by, if there is no due date, it specifies "Monday"', () => {
//   let rent = new ToDo('pay rent', 20)
//   let bills = new ToDo('pay bills', 20)
//   let laundry = new ToDo('laundry', 60)
//   let list = new ToDoList()

//   expect((list.getDueDates()).length).to.equal(0)

//   list.addToDo(rent, 'Friday')
//   expect((list.getDueDates()).length).to.equal(1)
//   expect((list.getDueDates())[0]).to.equal('pay rent - due Friday')

//   list.addToDo(bills, 'Tuesday')
//   expect((list.getDueDates()).length).to.equal(2)
//   expect((list.getDueDates())[0]).to.equal('pay rent - due Friday')
//   expect((list.getDueDates())[1]).to.equal('pay bills - due Tuesday')

//   list.addToDo(laundry)
//   expect((list.getDueDates()).length).to.equal(3)
//   expect((list.getDueDates())[0]).to.equal('pay rent - due Friday')
//   expect((list.getDueDates())[1]).to.equal('pay bills - due Tuesday')
//   expect((list.getDueDates())[2]).to.equal('laundry - due Monday')
// })

// it("allows you to display the names and due dates of todo items that are marked 'urgent'", () => {
//   let laundry = new ToDo('laundry', 95, false)
//   let walkDog = new ToDo('walk the dog', 60, true)
//   let mealPrep = new ToDo('meal prep', 120, true)
//   let list = new ToDoList()

//   list.addToDo(laundry)
//   expect(list.urgentItems()).toEqual([])

//   list.addToDo(walkDog, "Friday")
//   expect(list.urgentItems()).toEqual(['walk the dog - 60 minutes - due Monday'])

//   list.addToDo(mealPrep, "Wednesday")
//   expect(list.urgentItems()).toEqual(['walk the dog - 60 minutes - due Friday', 'meal prep - 120 minutes - due Wednesday'])
// })