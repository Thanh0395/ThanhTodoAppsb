const TodoList = ({ list, remove }) => {
  return (
    <>
      <div>
        {list?.length > 0 ? (
          <ul className="todo-list">
            {list.map((entry, index) => (
              <div className="todo">
                <li key={index}>{entry}</li>
                <button
                  className="deleted-button"
                  onClick={() => {
                    remove(entry);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>No task found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoList;
