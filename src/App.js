import React, { useState } from 'react';
import Form from './Components/Form';

function App() {
  const [values, setValues] = useState({ name: '', email: '', role: '' });

  // Member list as state
  const [members, setMembers] = useState([  ]);

  const onSubmit = () => {
    setMembers([values, ...members]);
  }
  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  }
  
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form 
        values={values}
        change={onChange}
        submit={onSubmit}
      />

    </div>
  );
}

export default App;