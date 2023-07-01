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
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        )
      })}

    </div>
  );
}

export default App;