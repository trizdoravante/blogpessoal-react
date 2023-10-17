import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Suponha que você tenha uma lista de personagens de Jane Austen
    // Aqui, eu criei uma lista fictícia de personagens
    const janeAustenCharacters = [
      'Elizabeth Bennet',
      'Mr. Darcy',
      'Elinor Dashwood',
      'Fitzwilliam Darcy',
      'Marianne Dashwood',
      'Emma Woodhouse',
      'George Knightley',
    ];

    // Mapeie os nomes dos personagens para o formato de objeto User
    const janeAustenUsers: User[] = janeAustenCharacters.map((character, index) => ({
      id: index + 1,
      name: character,
    }));

    // Defina o estado de usuários com os personagens de Jane Austen
    setUsers(janeAustenUsers);
  }, []);

  return (
    <div>
      <h1>Lista de personagens de Jane Austen</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
