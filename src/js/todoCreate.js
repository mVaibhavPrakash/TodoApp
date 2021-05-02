
function todoCreate(todoLists,setTodo){
    let fun=new Promise((res,rej)=>{
        let data={title:document.getElementById('todoTitle').value,content:document.getElementById('todoContent').value};
        let arr=JSON.parse(localStorage.getItem('todoList')) || [];
        arr.push(data);
        localStorage.setItem('todoList',JSON.stringify(arr));
        res(data);
    });
    fun
    .then((val) =>{
        document.getElementById('todoTitle').value='';
        document.getElementById('todoContent').value='';

        /*
            hence 'setTodo' accepts array so '...todoLists' spread out all the elements(here objects) from the array, 
            'val' is the newly created object, 
            at last all these elements(here objects) are stored in the array([]);
            without using '[]' inside 'setTodo' will give error in using 'map' function in 'Lists.js' file
             as 'map' function expects array where as we are passing objects in form of 'todoLists'('todoLists' updated as 'setTodo' changes)
        */
        setTodo([...todoLists,val]);
    })
    .catch((err)=>console.log(err));
}
export default todoCreate;