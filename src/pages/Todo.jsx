import React from 'react'
import Card from '../components/Card';
import AddButton from '../components/AddButton';
import { useState } from 'react';

function Todo() {
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
        setTitle("");
        setText("");
      };
    
      // 카드 삭제 버튼
      const deleteButtonHandler = (id) => {
        setCard((prev) => prev.filter((item) => item.id !== id));
      };
    
      // 카드 완료/취소버튼 (점심나가서먹을거같아~)
      const toggleButton = (id) => {
        console.log(id)
        setCard((prev) =>
          prev.map((cardItem) => {
            console.log(prev);
            if (cardItem.id === id)  {
              return {
                ...cardItem,
                isDone: !cardItem.isDone,
              };
            }
            return cardItem;
          })
        );
      };
      console.log(card)
  return (
    <>
    <div className="top-wrap-style">
    <div>My Todo List</div>
    <div>React</div>
  </div>
  <div className="input-button-style">
    <div className="input-wrap-style">
      제목&nbsp;
      <input
        className="input-style"
        value={title}
        onChange={titleChangeHandler}
      />
      &nbsp; 내용&nbsp;
      <input
        className="input-style"
        value={text}
        onChange={textChangeHandler}
      />
    </div>
    <AddButton addCardButton={addCardButton}/>
  </div>

  <div className="working-style">Working..!</div>

  <div className="working-wrap-style">
    {card
      .filter((item) => item.isDone === false)
      .map(function (item) {
        return (
          <Card
            key={item.id}
            item={item}
            deleteButtonHandler={deleteButtonHandler}
            toggleButton={toggleButton}
          />
        );
      })}
  </div>
  <div className="done-style">Done..!</div>
  <div className="working-wrap-style">
    {card
      .filter((item) => item.isDone === true)
      .map(function (item) {
        return (
          <Card
            key={item.id}
            item={item}
            deleteButtonHandler={deleteButtonHandler}
            toggleButton={toggleButton}
          />
        );
      })}
  </div>
  </>
  )
  
}

export default Todo;