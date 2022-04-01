import React, { useState } from "react";
import './App.css';
import Home from './Home';
import PizzaForm from './PizzaForm';
import schema from './Schema';

const App = () => {
  const [pizzas, setPizzas] = useState("");
  const [disabled, setDisabled] = useState("");

  }


  return (
    <div >
      <nav>
      <h1>Lambda Eats</h1>
      
      </nav>
    </div>
  );
};

export default App;
