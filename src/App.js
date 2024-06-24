import logo from './logo.svg';
import './App.css';

import Button from './Component/button';
import TextField from './Component/TextField';

import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Button
        title="Click Me"
        backgroundColor="blue"
        icon={<FaBeer />}
        size="large"
      />
      <Button
        title="Submit"
        backgroundColor="gray"
        size="small"
      />
      <TextField
        label="Username"
        maxLength={20}
        minLength={5}
        placeholder="Enter your username"
        size="large"
      />
      <TextField
        label="Password"
        maxLength={15}
        minLength={8}
        placeholder="Enter your password"
        size="small"
      />
    </div>
  );
}

export default App;
