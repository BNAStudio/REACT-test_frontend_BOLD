import { useReducer } from 'react';
import { Header, Sales } from './components/index.js';
import { storageContext } from './context/storageContext'
import { storageReducer } from './context/storageReducer'
import useDatabase from './Hooks/useDatabase';
import { types } from './types/types.js';

const URL = "./src/db/db.json"

function App() {
  const {users} = useDatabase(URL)

  const initialData = {
    users: users,
    filter: types.all,
    originalData: users
  }

  // inicializa estado
  const [data, dispatch] = useReducer(storageReducer, initialData)


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
