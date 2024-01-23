import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const movePage = () => {
    navigate("/todo");
  };
  {
    return (
      <div>
        <div>navigate연습페이지입니다 버튼을 눌러주세요</div>
        <button onClick={movePage}>여기!!!</button>
      </div>
    );
  }
};
export default Main;
