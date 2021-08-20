import React, { memo } from 'react';

const HabitAddForm = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Enter Your Habit" />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

// state 없는 경우, function component
// PureComponent, function component with memo

// function HabitAddForm(props) {
//  
// }

