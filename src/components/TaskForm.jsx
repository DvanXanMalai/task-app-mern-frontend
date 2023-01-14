const TaskForm = ({ createTask, name, handleInputChange, isEditing, updateTask }) => {
  return (
    <form className="task-form" onSubmit={isEditing ? updateTask : createTask}>
      <input
        type="text"
        name="name"
        placeholder="Add a Task"
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit">{isEditing ? 'Edit' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;
