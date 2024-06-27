const { useState, useEffect } = React;

// Define a custom hook to replace the mixin functionality
function useMyMixin() {
  useEffect(() => {
    console.log('Component did mount!');
  }, []);

  const sayHello = () => {
    console.log('Hello from custom hook!');
  };

  return { sayHello };
}

// Create a React component that uses the custom hook
function MyComponent() {
  const [message, setMessage] = useState('Hello, World!');
  const { sayHello } = useMyMixin();

  const handleClick = () => {
    setMessage('You clicked the button REACT18!');
    sayHello();
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// Render the component to the DOM
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<MyComponent />);