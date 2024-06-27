// Define a simple mixin
const MyMixin = {
    componentDidMount() {
        console.log('Component did mount!');
    },
    sayHello() {
        console.log('Hello from mixin!');
    }
};

// Create a React component that uses the mixin
const MyComponent = React.createClass({
    mixins: [MyMixin],

    getInitialState() {
        return {
            message: 'Hello, World!'
        };
    },

    handleClick() {
        this.setState({
            message: 'You clicked the button!'
        });
        this.sayHello();
    },

    render() {
        return (
            <div>
                <TitleComponent title={this.state.message}/>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
});

const TitleComponent = React.createClass({

    propTypes: {
        title: React.PropTypes.number.isRequired,
    },

    render() {
        return (
            <h1>TITRE : {this.props.title}</h1>
        );
    }
});

// Render the component to the DOM
ReactDOM.render(<MyComponent />, document.getElementById('app'));
