import React, { Component }  from 'react';
import { connect } from 'react-redux'
class AddToDo extends Component {
    content = '';
    handleChange = (e) => {
        if (e.target.value !== '') {
            this.content = e.target.value
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.content) {
            const id = this.props.todos.length + 1;
            console.log(this.props)
            this.props.addTodo({ id, content: this.content });
            this.content = '';
            e.target.reset();
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todo:</label>
                    <input type="text" onChange = {this.handleChange}/>
                </form>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
      todos: state.todos
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (content) => { dispatch({ type: 'ADD_TODO', value: content })}
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);