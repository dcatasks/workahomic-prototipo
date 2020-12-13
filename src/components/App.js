import React, { Component } from 'react';
import TaskList from './TaskList';
import { connect } from "react-redux";

class App extends Component {
  render() {

    const { lists } = this.props;
    return (
      <div className="App">
        <h2>Lista de tareas</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <TaskList key={list.id} title={list.title} cards={list.cards} />
          ))}
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
