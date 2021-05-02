import '../css/Form.css';
import todoCreate from '../js/todoCreate';

const Form = ({todoLists,setTodo}) =>{
    return(
        <form className='todoForm' onSubmit={(e) =>{e.preventDefault();todoCreate(todoLists,setTodo)}}>
            <div className='todoFormContainers'>
                <div className='todoFormContainer'>
                    <label htmlFor='todoTitle'>Add Title</label>
                    <textarea id='todoTitle' name='todoTitle' placeholder='add title to you todo......' maxLength='30' minLength='6' required/>
                </div>
                <div className='todoFormContainer'>
                    <label htmlFor='todoContent'>Add Content</label>
                    <textarea id='todoContent' name='todoContent' placeholder='add what you want todo.....' maxLength='50' minLength='10' required/>
                </div>
            </div>
            <button>Submit Todo</button>
        </form>
    )
};

export default Form;