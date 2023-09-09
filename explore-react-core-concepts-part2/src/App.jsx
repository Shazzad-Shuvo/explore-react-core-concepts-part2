
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick() {
    alert('Button Clicked!');
  }

  const handleClick2 = () => {
    alert('Button 2 clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

    <Friends></Friends>

      <Users></Users>

      <Team>

      </Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('Third clicked') }}>Third</button>
      <button onClick={() => addToFive(4)}>Add</button>

    </>
  )
}

export default App
