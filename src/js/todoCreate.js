function todoCreate(todoLists, setTodo) {
  let fun = new Promise((res, rej) => {
    let data = {
      title: document.getElementById('todoTitle').value,
      content: document.getElementById('todoContent').value,
      priority: document.querySelector('input[name="priority"]:checked').value,
    };
    let arr = JSON.parse(localStorage.getItem('todoList')) || [];
    arr.push(data);
    localStorage.setItem('todoList', JSON.stringify(arr));
    res(arr);
  });
  fun
    .then((val) => {
      document.getElementById('todoTitle').value = '';
      document.getElementById('todoContent').value = '';

      /*
            v.0.0.1
            hence 'setTodo' accepts array so '...todoLists' spread out all the elements(here objects) from the array, 
            'val' is the newly created object, 
            at last all these elements(here objects) are stored in the array([]);
            without using '[]' inside 'setTodo' will give error in using 'map' function in 'Lists.js' file
             as 'map' function expects array where as we are passing objects in form of 'todoLists'('todoLists' updated as 'setTodo' changes)
        */

      /*
            v0.0.2 ------> Bug fix.
            Before using spread operator for '...todoLists' don't allow to render the pages after first 'todo' insertion.
            It was because hence 'useTodo([])' is set with empty array so 'todoLists' variable is initialized to 'null'(as at first render useState is returning null due to empty array)
            and same thing was happening after each 'todo' insertion. SO initially we have to refresh the page one tme to let everything work fine as page refresh trigger
            the 'useEffect' and 'useEffect' doesn't use 'spread' operator to change 'state' value.
            So in this bug fix I used same method(which we used in useEffect) to change sate value.
        */
      setTodo(val);
    })
    .catch((err) => console.log(err));
}
export default todoCreate;
