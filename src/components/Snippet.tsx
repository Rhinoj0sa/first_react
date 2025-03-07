import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Snippet {
  id: number;
  title: string;
  code: string;
}

const Snippets: React.FC = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');

  const username = 'rhino';
  const password = 'admin';
  const token = btoa(`${username}:${password}`);

  useEffect(() => {
    axios.get('http://localhost:8000/snippets/', {
      headers: {
        'Authorization': `Basic ${token}`
      }
    })
      .then(response => {
        setSnippets(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.error('There was an error fetching the snippets!', error);
      });
  }, []);

  const handleCreateSnippet = () => {
    axios.post('http://localhost:8000/snippets/', { title, code }, {
      headers: {
        'Authorization': `Basic ${token}`
      }
    })
      .then(response => {
        setSnippets([...snippets, response.data]);
        setTitle('');
        setCode('');
      })
      .catch(error => {
        console.error('There was an error creating the snippet!', error);
      });
  };

  return (
    <div>
      <h1>Snippets</h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Code"
        />
        <button onClick={handleCreateSnippet}>Create Snippet</button>
      </div>
      <ul>
        {snippets.map((snippet) => (
          <li key={snippet.id}>
            <h2>{snippet.title}</h2>
            <pre>{snippet.code}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Snippets;
