import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Lists from './lists';

class TodoList extends React.Component {

  state = {
    task: "",
    items: []
  }

  onChangeHandler = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      task: "",
      items: [...this.state.items, this.state.task]
    })
  }

  deleteTaskHandler = (id) => {
    const deleteTaskResult = this.state.items.filter((item, index) => index !== id);

    this.setState({ items: deleteTaskResult })
  }

  render() {
    return (

      <div>

        <h1 className=' text-4xl font-semibold text-center text-red-500 mt-8'>To do list</h1>

        <form
          onSubmit={this.onSubmitHandler}
          className=' container mx-auto flex flex-col justify-center items-center'>

          <input
            placeholder='Type your task...?'
            type='text'
            value={this.state.task}
            onChange={this.onChangeHandler}
            className=' w-[70%] bg-slate-200 text-slate-500 outline-none  rounded-lg p-3 mt-8 '
          />

          <button type='submit'
            className=' w-40 text-lg font-medium rounded-lg p-2 mt-5 bg-red-500 text-white' >
            Add Task
          </button>

        </form>

        <Lists
          items={this.state.items}
          deleteTaskHandler={this.deleteTaskHandler}
        />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoList />)