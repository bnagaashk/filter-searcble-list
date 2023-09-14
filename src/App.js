import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {SearchInput: ' ', intialUsersList: userDetailsList}

  deleteUser = uniqueNo => {
    const {intialUsersList} = this.state
    const filteredUserList = intialUsersList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )

    this.setState({intialUsersList: filteredUserList})
  }

  searchUser = event => {
    this.setState({SearchInput: event.target.value})
  }

  render() {
    const {intialUsersList, SearchInput} = this.state

    const searchableList = intialUsersList.filter(eachUser =>
      eachUser.name.includes(SearchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.searchUser} />
        <ul className="list-container">
          {searchableList.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
