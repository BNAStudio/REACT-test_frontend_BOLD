import { useEffect, useReducer } from 'react';
import { Header, Sales } from './components/index.js';
import { storageContext } from './context/storageContext'
import { storageReducer } from './context/storageReducer'
import useDatabase from './Hooks/useDatabase';
import { types } from './types/types.js';

const URL = "./src/db/db.json"

function App() {
  const fetch = useDatabase(URL)

  const initialData = {
    users: [],
    filter: types.all,
    originalData: []
  }


  // inicializa estado
  const [data, dispatch] = useReducer(storageReducer, initialData)


  useEffect(() => {
    if (!fetch) return;

    dispatch({ filter: types.initialize, payload: fetch.users })

  }, [fetch])



  return (
    <storageContext.Provider value={{ data, dispatch }} >
      <div className="App">
        <Header logo="./src/assets/images/header_logo.png" />
        <Sales />
      </div>
    </storageContext.Provider>
  )
}

export default App
