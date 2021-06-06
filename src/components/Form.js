import '../css/Form.css';
import todoCreate from '../js/todoCreate';

const Form = ({ todoLists, setTodo }) => {
  return (
    <form
      className="todoForm"
      onSubmit={(e) => {
        e.preventDefault();
        todoCreate(todoLists, setTodo);
      }}>
      <label className="formLabel" htmlFor="todoTitle">
        Add Title
      </label>
      <input
        className="todoInput"
        id="todoTitle"
        name="todoTitle"
        placeholder="add title to you todo......"
        required
      />
      <label className="formLabel" htmlFor="todoContent">
        Add Content
      </label>
      <input
        className="todoInput"
        id="todoContent"
        name="todoContent"
        placeholder="add what you want todo....."
        required
      />
      <div className="dropdownContent">
        <br />
        <input type="radio" name="priority" value="normal" defaultChecked />
        Normal
        <br />
        <input type="radio" name="priority" value="medium" /> Medium
        <br />
        <input type="radio" name="priority" value="high" /> High
      </div>
      <button id="formButton">Submit Todo</button>
    </form>
  );
};

export default Form;
