import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Calculator from "./features/Calculator/Calculator"
import TicTacToe from "./features/TicTacToe/TicTacToe";
import ToDoList from "./features/ToDoList/ToDoList";

function App() {
  const [activeTab, setActiveTab] = useState([
    { id: 1, 
      label: "TicTacToe",
       isActive: true,
        component: <TicTacToe /> }, 
    {
      id: 2,
      label: "Calculator",
      isActive: false,
      component: <Calculator/>,
    },
    { id: 3,
       label: "ToDoList",
        isActive: false,
         component: <ToDoList/> },
  ]);

 
  const handleActiveTab = (id) => {
    let copy = [...activeTab];
    copy[activeTab.findIndex((item) => item.isActive)].isActive = false;
    copy[activeTab.findIndex((item) => item.id === id)].isActive = true;
    copy[activeTab.findIndex((item) => item.id === id)].isActive = true;
    setActiveTab(copy);
  };

  return (
    <div>
      <Navigation activeTab={activeTab} handleActiveTab={handleActiveTab} />
      <div>{activeTab.find((item) => item.isActive).component}</div>
      <Footer />
    </div>
  );
}

export default App;
