import todoDelete from '../js/todoDelete';
import '../css/List.css';
import activeElement from '../js/active';

function List({ id, value, setTodo, active, activeIndex, setActive }) {
  return (
    <div className="todoList" id={id}>
      <h3
        className={`todoTitle ${value.priority}`}
        onClick={(e) => {
          e.preventDefault();
          activeElement(id, activeIndex, setActive);
        }}>
        {value.title}
      </h3>

      <p className={`todoContent${active}`}>{value.content}</p>

      <button
        id="todoEditButton"
        onClick={(e) => {
          e.preventDefault();
          todoDelete(e, setTodo);
        }}>
        Edit
      </button>

      <button
        id="todoDeleteButton"
        onClick={(e) => {
          e.preventDefault();
          todoDelete(e, setTodo);
        }}>
        Delete
      </button>
    </div>
  );
}

export default List;
