import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/project' component={Project} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  )
}

export default App
