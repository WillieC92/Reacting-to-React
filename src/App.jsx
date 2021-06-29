import React, {useState} from  "react";
import Greater from './components/Greater';

const App = () => {
    
    const [userName, setuserName] = useState('');
    const [loaded] = useState(false);
    const [notLoaded] = useState(true);

    if (loaded) {
        return <h1>Website loading ...</h1>
        
    } 

  return (
      
    <div>
      <Greater greet="Hello there!"name="Willie"/>
      <Greater greet="Hello there!"name="Jasmine"/>
      <Greater greet="Hello there!"name="Josh"/>
      <input value={userName} onChange= {e => setuserName(e.target.value)}/>
      <p>You are logging in as: {userName}</p>
      <button onClick={loaded}>Click Me!</button>



    </div>
  );
};

export default App;
