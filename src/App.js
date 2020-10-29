import React from 'react';
import {connect} from "react-redux";
import {getReposThunkCreator, setUser} from "./redux/mainPageReducer";
import MainPage from "./components/MainPage";


class App extends React.Component {


  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.props.getReposThunkCreator(this.props.currentUser)
    }
  }

  render() {
    return <MainPage listOfRepos={this.props.listOfRepos}
                     setUser={this.props.setUser}

    />
  }

}

let mapStateToProps = (state) => {
  return {
    currentUser: state.mainPage.currentUser,
    listOfRepos: state.mainPage.listOfRepos
  }
}
export default connect(mapStateToProps, {getReposThunkCreator, setUser,})(App)

