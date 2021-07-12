//Below is a partially completed implementation for a class based component named Counter. Add in the necessary code to manage the state for the counter.

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { //INITIALIZE STATE
          count: 0
        };
    }

    incrementCounter() { //IMPLEMENT incrementCounter
        let count = this.state.count;
        this.setState({count: count + 1});
    }

    render(){ //ADD EVENT HANDLER WHERE IT SHOULD GO BELOW...
        return React.createElement(
            'button',
            {onClick: () => this.incrementCounter()},
            `Click me! ${this.state.count}`
        );
    }
 }

const domContainer = document.querySelector('#state_counter_component');
ReactDOM.render(React.createElement(Counter), domContainer);