import React from 'react'
import SideBar from './public/SideBar'
import Profile from './pages/Profile'
import Skill from './pages/Skill'
import ContactMe from './pages/ContactMe'
import Timeline from './pages/Timeline'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.getSelection = this.getSelection.bind(this)
    this.state = {
      page: 'Profile'
    }
  }

  getSelection(pageSelected){
    this.setState({ page: pageSelected })
  }


  render(){
    if (this.state.page === 'Profile') {
      return <div>
        <SideBar getSelection={this.getSelection} />
        <Profile />
      </div>
    } else if(this.state.page === 'Skills') {
      return <div>
        <SideBar getSelection={this.getSelection} />
        <Skill />
      </div>
    } else if(this.state.page === 'Timeline') {
      return <div>
        <SideBar getSelection={this.getSelection} />
        <Timeline />
      </div>
    } else if(this.state.page === 'Contact Me') {
      return <div>
        <SideBar getSelection={this.getSelection} />
        <ContactMe />
      </div>
    }
  }
}