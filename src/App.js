import './App.css';
import Tablist from './components/Tablist';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      active :1
    }
    this.changeTab=(id)=> {
      this.setState({
        active :id
      })
    }
  }

  render(){
    const tabs =[{
      id:1,
      title:'Text'
    },
    {
      id:2,
      title:'Image'
    },
    {
      id:3,
      title:'Image'
    },
    {
      id:4,
      title:'Video'
    },
    {
      id:5,
      title:'Table'
    },
    {
      id:6,
      title:'Email'
    },
  ]
  return (
    <div className="App">
      <nav>
        <Tablist tabs={tabs} activeTab={this.state.active} ctab={this.changeTab}/>
      </nav>
    </div>
  )

  }
}


export default App;
