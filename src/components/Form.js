import '../css/Form.css';

const Form = () =>{
    return(
        <form className='todoForm'>
            <div className='todoFormContainers'>
                <div className='todoFormContainer'>
                    <label htmlFor='todoAddTitle'>Add Title</label>
                    <textarea name='todoAddTitle' placeholder='add title to you todo......' required/>
                </div>
                <div className='todoFormContainer'>
                    <label htmlFor='todoAddContent'>Add Content</label>
                    <textarea name='todoAddContent' placeholder='add what you want todo.....' required/>
                </div>
            </div>
            <button>Submit Todo</button>
        </form>
    )
};

export default Form;