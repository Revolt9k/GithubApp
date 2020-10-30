import React from 'react';
import {connect} from "react-redux";
import {getReposThunkCreator, setUser, searchReposThunkCreator, changePage, setSearchValue} from "./redux/mainPageReducer";
import MainPage from "./components/MainPage";

class App extends React.Component {

  componentDidUpdate(prevProps, prevState, snapshot) {

    if(prevProps.currentPage !== this.props.currentPage) {
      this.props.searchReposThunkCreator(this.props.currentSearchValue, this.props.currentPage)
    }
  }

  render() {
    return <MainPage listOfRepos={this.props.listOfRepos}
                     setUser={this.props.getReposThunkCreator}
                     searchRepos={this.props.searchReposThunkCreator}
                     changePage={this.props.changePage}
                     pageSize={this.props.pageSize}
                     totalReposCount={this.props.totalReposCount}
                     currentPage={this.props.currentPage}
                     currentSearchValue={this.props.currentSearchValue}
                     setSearchValue={this.props.setSearchValue}

    />
  }

}

let mapStateToProps = (state) => {
  return {
    currentUser: state.mainPage.currentUser,
    listOfRepos: state.mainPage.listOfRepos,
    pageSize: state.mainPage.pageSize,
    currentPage: state.mainPage.currentPage,
    currentSearchValue: state.mainPage.currentSearchValue,
    totalReposCount: state.mainPage.totalReposCount,
  }
}


export default connect(mapStateToProps, {getReposThunkCreator, setUser, searchReposThunkCreator, changePage, setSearchValue})(App)

