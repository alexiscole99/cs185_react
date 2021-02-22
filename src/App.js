import './App.css';
import Tablist from './components/Tablist';
import Body from './components/Body';
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
      title:'Video'
    },
    {
      id:4,
      title:'Table'
    },
    {
      id:5,
      title:'Email'
    },
  ]
  return (
    <div className="App">
      <div className="body">
        <Body activeTab={this.state.active}/>
      </div>
      <div className="tablist">
        <Tablist tabs={tabs} activeTab={this.state.active} ctab={this.changeTab}/>
      </div>
    </div>
  )

  }
}


export default App;
