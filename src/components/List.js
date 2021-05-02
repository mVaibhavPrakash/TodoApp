import todoDelete from '../js/todoDelete';
function List({keys,value,setTodo}){
    return (
        <div id={keys}>
            <h3>{value.title}</h3>
            <div>{value.content}</div>
            <button onClick={(e)=>{e.preventDefault();todoDelete(e,setTodo)}}>Delete</button>
        </div>
    );
}

export default List;