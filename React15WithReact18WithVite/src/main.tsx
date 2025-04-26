import './hackReact';
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMClient from 'react-dom/client'

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
        this.refs.inputFirstName.focus();
        var node = ReactDOM.findDOMNode(this.refs.inputFirstName);
        console.log(node.classList);
    },

    render() {
        return (
            <div>
                <div>
                    <TitleComponent title={this.state.message} />
                    <button onClick={this.handleClick}>Click Me</button>
                </div>
                <div>
                    <input name="firstname" ref='inputFirstName' placeholder="Diego" className="flashy groovy" />
                    <input name="familyName"  placeholder="Delavega" />
                </div>
            </div>

        );
    }
});

const TitleComponent = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired,
        style: React.PropTypes.string.isRequired,
    },

    render() {
        return (
            <h1>TITRE : {this.props.title}</h1>
        );
    }
});

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error(
    "Root element not found. Check if it's in your index.html or if the id is correct."
  )
}

// Render the component to the DOM
ReactDOMClient.createRoot(rootElement).render(
    <MyComponent/>
)