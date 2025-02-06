import Card from "./Card"; // Import the Card component
import { useState } from "react";

const App = () => {
  
  return (
    <div className="card-container">
     
      <Card title="My Name is Narasimha reddy" rating={5} isCool={true}/>
      <Card title="Learning"  />
      <Card title="React" />
    </div>
  );
};

export default App;
