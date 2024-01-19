// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [card, setCard] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      text: "리액트 기초를 공부합니다",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  // const [isDone, setIsDone] = useState(false);

  // 제목 인풋
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  // 내용 인풋
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  // 카드 추가 버튼
  const addCardButton = () => {
    const newCard = {
      id: card.length + 1,
      title: title,
      text: text,
      isDone: false,
    };
    setCard([...card, newCard]);
  };

  // 카드 삭제 버튼
  const deleteButtonHandler = (id) => {
    // const afterDeleteCard = card.filter((item) => card.id !== id);
    // setCard(afterDeleteCard);

    // setCard(() => {
    //   return prev.filter((item) => item.id !== id);
    // });
    setCard((prev) => prev.filter((item) => item.id !== id));
  };

  // 카드 완료/취소버튼 (점심나가서먹을거같아~)
  const toggleButton = (id) => {
    // setCard((prev) => {
    //   return prev.map((cardItem) => {
    //     if (cardItem.id === id) {
    //       return {
    //         ...cardItem,
    //         isDone: !cardItem.isDone,
    //       };
    //     }
    //     return cardItem;

    setCard((prev) =>
      prev.map((cardItem) => {
        if (cardItem.id === id) {
          return {
            ...cardItem,
            isDone: !cardItem.isDone,
          };
        }
        return cardItem;
      })
    );
  };

  return (
    <div className="page-style">
      <span>My Todo List</span>
      <span>React</span>
      <div>
        제목&nbsp;
        <input value={title} onChange={titleChangeHandler} />
        내용&nbsp;
        <input value={text} onChange={textChangeHandler} />
        <button className="addCardButton-style" onClick={addCardButton}>
          추가하기
        </button>
      </div>

      <div>Working</div>

      <div className="working-wrap">
        {card
          .filter((item) => item.isDone === false)
          .map(function (item) {
            return (
              <div key={item.id} className="card-style">
                <div className="title-style">{item.title}</div>
                <div className="text-style">{item.text}</div>
                <div className="button-wrap">
                  <button
                    className="deleteButton"
                    onClick={() => deleteButtonHandler(item.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="completeButton"
                    onClick={() => toggleButton(item.id)}
                  >
                    {item.isDone === false ? "완료" : "취소"}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div>Done</div>
      <div className="working-wrap">
        {card
          .filter((item) => item.isDone === true)
          .map(function (item) {
            return (
              <div key={item.isDone} className="card-style">
                <div className="title-style">{item.title}</div>
                <div className="text-style">{item.text}</div>
                <div className="button-wrap">
                  <button
                    className="deleteButton"
                    onClick={() => deleteButtonHandler(item.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="completeButton"
                    onClick={() => toggleButton(item.id)}
                  >
                    {item.isDone === true ? "취소" : "완료"}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
