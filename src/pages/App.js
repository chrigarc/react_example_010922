import { useState, useEffect } from 'react';
import User from '../components/User';

function App() {  

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // cuando montas
    return () => {
        //cuando me quitas
    }
  });

  const onHandle = () => {  
    console.log(users);
    users.push(1);
    setUsers(users.slice());
  }

  const onHandleDelete = () => {
    setUsers(users.slice(1));
  }

  return (
    <div className="App">
      <button onClick={onHandle}>Agregar</button>
      <br/>
      {users.length > 0 ? <button onClick={onHandleDelete}>Borrar</button> : null}
      <br />
      {users.map((item, index) => {
        return <User key={index} />
      })}
    </div>
  );
}

export default App;
