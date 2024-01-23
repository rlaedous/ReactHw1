import { useNavigate } from "react-router-dom";

const Card = ({ item, deleteButtonHandler, toggleButton}) => {
  const navigate = useNavigate();

  const moveDetail = (event) => {
    navigate("/detail",{
      state:{
        id:item.id,
        title:item.title,
        text:item.text,
        isDone:item.isDone,
      }
    });

    if(event.target === undefined){
      console.log(event.target)
      alert("빈값입니다 상세페이지 이동불가")
    };
  };

    return (
      <>        
      <div key={item.id} className="card-style">
        <div className="title-style"onClick={moveDetail}>{item.title}</div>
        <div className="text-style"onClick={moveDetail}>{item.text}</div>
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
      </>
    );
  };
  export default Card;