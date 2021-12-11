import { useState, useEffect } from 'react';
import './App.css';
import RepositoryItem from './RepositoryItem';


function App() {
  const [repositorys,setRepositorys] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/gabriel-rosch/repos')
    .then(reponse => reponse.json())
    .then(data => setRepositorys(data))
  },[])

  return (
   <>
    {
      repositorys.map((repository) => {
        return <RepositoryItem key={repository.id} repo={repository}/>    
      })
    }
   </>
  );
}

export default App;
