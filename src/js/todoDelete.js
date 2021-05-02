
    function todoDelete(event,setTodo){
        event.preventDefault();
        const nodeId=parseInt(event.target.parentNode.id);
        let arr=JSON.parse(localStorage.getItem('todoList'));
        let arr1=arr.filter((val,i)=>i !== nodeId);
        localStorage.setItem('todoList',JSON.stringify(arr1));
        setTodo(arr1)
    }
export default todoDelete;