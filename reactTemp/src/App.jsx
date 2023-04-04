import './App.css'
import Header from './components/header/Header'
import Main from './components/Main/main';
import Sidebar from './components/Sidebars/sidebar';
import { MainContext } from './context/MainContext'

const App = () => {
  const globalVar = {};

  return (
    <MainContext.Provider value={{
      globalVar
    }}>
      <div className="App">
        <Header />
        <Sidebar />
        <Main/>
      </div>
    </MainContext.Provider>
  )
}

export default App;