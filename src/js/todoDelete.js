
    function todoDelete(event,setTodo){
        event.preventDefault();
        const nodeId=parseInt(event.target.parentNode.id);
        let arr=JSON.parse(localStorage.getItem('todoList'));
        arr.splice(nodeId,1);
        localStorage.setItem('todoList',JSON.stringify(arr));
        setTodo(arr)
    }
export default todoDelete;