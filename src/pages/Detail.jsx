import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = (item) => {
  const location = useLocation();
  const data = { ...location.state };
  const [detail, setDetail] = useState([data]);
  const navigate = useNavigate();
  const moveHome = () => {
    navigate("/todo", {
      state: {
        id: item.id,
        title: item.title,
        text: item.text,
        isDone: item.isDone,
      },
    });
  };

  const deleteButton = () => {
    if (detail[0].isDone === false) {
      navigate("/todo");
    } else alert("취소버튼을 누르고 시도하세요");
  };

  const toggleButton = () => {
    setDetail((prev) =>
      prev.map((cardItem) => {
        if (cardItem.isDone === true) {
          return {
            ...cardItem,
            isDone: !cardItem.isDone,
          };
        }
        if (cardItem.isDone === false) {
          alert("이미 완료입니다 삭제를눌러주세요");
        }
        return cardItem;
      })
    );
  };

  return (
    <>
      <div className="card-style">
        <div className="title-style">{detail[0].title}</div>
        <div className="text-style">{detail[0].text}</div>
        <div className="button-wrap-style">
          <button className="deleteButton-style" onClick={deleteButton}>
            삭제하기
          </button>
          <button className="completeButton-style" onClick={toggleButton}>
            {detail[0].isDone === false ? "완료" : "취소"}
          </button>
        </div>
      </div>
      <button onClick={moveHome}>todo 페이지로 이동</button>
    </>
  );
};

export default Detail;
