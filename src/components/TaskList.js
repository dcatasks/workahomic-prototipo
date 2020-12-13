import React, { useState } from "react";
import TaskCard from './TaskCard';

const TaskList = ({ title, cards, listID, index, dispatch }) => {
    return(
        <div style={styles.container}>
            <h4>{title}</h4>
            <TaskCard></TaskCard>
        </div>
    
    )
}

const styles = {
    container: {
        backgroundColor: '#ccc',
        borderRadius: 3,
        width: 300,
        padding: 8
    }
};

export default TaskList;