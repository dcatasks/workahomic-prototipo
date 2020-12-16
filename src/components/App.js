import React, { Component } from 'react';
import TaskList from './TaskList';
import { connect } from "react-redux";
import ActionButton from './ActionButton';
import PrimarySearchAppBar from './AppBar';

class App extends Component {
  render() {

    const { lists } = this.props;
    return (
      <div className="App">
        <PrimarySearchAppBar />
        <h2>Lista de tareas</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <TaskList listId={list.id} key={list.id} title={list.title} cards={list.cards} />
          ))}
          <ActionButton list />
        </div>
      </div>
    );
  }
  
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
