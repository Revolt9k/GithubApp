import React from 'react';
import {connect} from "react-redux";
import {getReposThunkCreator, setUser, searchReposThunkCreator} from "./redux/mainPageReducer";
import MainPage from "./components/MainPage";

class App extends React.Component {

  render() {
    return <MainPage listOfRepos={this.props.listOfRepos}
                     setUser={this.props.getReposThunkCreator}
                     searchRepos={this.props.searchReposThunkCreator}

    />
  }

}

let mapStateToProps = (state) => {
  return {
    currentUser: state.mainPage.currentUser,
    listOfRepos: state.mainPage.listOfRepos
  }
}
export default connect(mapStateToProps, {getReposThunkCreator, setUser, searchReposThunkCreator})(App)

