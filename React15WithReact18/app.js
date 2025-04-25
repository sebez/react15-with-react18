
/************************************************** */
/** [Hack à faire une fois globalement]             */
/************************************************** */

/* Redéfini createClass sur le React 18 */
React.createClass = createReactClass;

/* Redéfini PropTypes sur le React 18 */
React.PropTypes = PropTypes;

/************************************************** */
/** [/Hack à faire une fois globalement]             */
/************************************************** */

// Define a simple mixin
const MyMixin = {
  componentDidMount() {
    console.log('Component did mount!');
  },
  sayHello() {
    console.log('Hello from a real mixin yolo!');
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
    title: React.PropTypes.number.isRequired,
  },

  render() {
    return (
      <h1>TITRE : {this.props.title}</h1>
    );
  }
});

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<MyComponent />);

