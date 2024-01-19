const Card = ({ item, deleteButtonHandler, toggleButton }) => {
    return (
      <div key={item.id} className="card-style">
        <div className="title-style">{item.title}</div>
        <div className="text-style">{item.text}</div>
        <div className="button-wrap-style">
          <button
            className="deleteButton-style"
            onClick={() => deleteButtonHandler(item.id)}
          >
            삭제하기
          </button>
          <button
            className="completeButton-style"
            onClick={() => toggleButton(item.id)}
          >
            {item.isDone === false ? "완료" : "취소"}
          </button>
        </div>
      </div>
    );
  };
  export default Card;