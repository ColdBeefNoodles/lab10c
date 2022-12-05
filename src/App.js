import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <div className="App">
      <h1> How I created my first react app! </h1>
      <p> First, I installed node.js on my computer </p>
      <p> Next, I installed git for windows on my computer </p>
      <p> Then, I installed VS code on my computer! </p>
      <p> After, I made a folder for the react app. </p>
      <p> Then, I ran the command to create the react app: npx create-react-app lab10c in the terminal.  </p>
      <p> Then, I ran the command npm start to run the react app locally.  </p>
      <p> I also then created a simple counter component in react. </p>
      <p> Then, I edited App.js file to put in the content for this page.  </p>
      <p> Finally, I ran the command npm run deploy to build the application and deploy to github pages. </p>
    </div>
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <div className = "App">
      <h1> The difficulties I encountered </h1>
      <p> When installing git I encountered many errors</p>
      <p> I googled what the errors might be and looked for solutions. </p>
      <p> I found a solution that fixed my installer on stackoverflow. It turns out there was something wrong with my computer! </p>
      <p> P.S This assignment also helped me fix my other configuration related issues on my computer. </p> <br/>
      <p> Another problem I encountered was deployment issues. I had to learn how to build and deploy to github pages</p>
      <p> I had problems with the package.json file and had to change some values such as private to false.</p>
      <p> Also forgot to change the homepage value in the package.json file to my github.io link </p>
    </div>
    <p>Counter: {count} </p>
      <button onClick={() => setCount(count - 1)}>
        Click to count down
      </button>
      <button onClick={() => setCount(count + 1)}>
        Click to count up
      </button>
    <footer> <h3> Darren Chen CPS530 </h3></footer>
    </>
  );
}

export default App;
