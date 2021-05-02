import List from './List';

function Lists({todoLists,setTodo}) {
    let check=false;
    if(todoLists!=null)
        check=true;
    return (
        <div className='todoLists'>
            {
                check ?
                        todoLists.map((list,index) =>{
                            return <List key={index} keys={index} value={list} setTodo={setTodo} />
                        })
                      :""
            }
        </div>
    );
}

export default Lists;