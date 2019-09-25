import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import './App.css';
import { romanToArabic } from './helpers'

function App() {
  const [roman, setRoman] = useState(0);

  
  return (
    <div className="App">
      
     <Typography
      variant="h6"
    >Enter roman numerals here</Typography>
      <Input
        onChange={(e) => setRoman(e.target.value)}
        value={roman}
     />
     <Typography
      variant="body1"
    >{romanToArabic(roman)}</Typography>
    </div>
  );
}

export default App;
