import { useState } from 'react';
import List from './List';

function Lists({ todoLists, setTodo }) {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="TodoLists">
      {todoLists
        ? todoLists.map((list, index) => {
            const active = index === activeIndex ? 'active' : '';
            return (
              <List
                key={index}
                id={index}
                value={list}
                setTodo={setTodo}
                active={active}
                activeIndex={activeIndex}
                setActive={setActiveIndex}
              />
            );
          })
        : ''}
    </div>
  );
}

export default Lists;
