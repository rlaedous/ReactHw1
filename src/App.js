// import logo from './logo.svg';
import './App.css';

function App() {
  // 카드 추가 버튼
  const addCardButton = () =>{
    alert("추가")
  }
  // 카드 삭제 버튼
  const deleteButtonHandler = () =>{
    alert("삭제")
  } 
  // 카드 완료 버튼 
  const completeButton = () =>{
    alert("완료")
  } 
  return (
    <div className='page-style'>
      <span>My Todo List</span> 
      <span>React</span>
      <div>제목<input/>내용<input/>
      <button onClick={addCardButton}>추가하기</button></div>
        
      <div>Working</div>
      <div className='card-style'>
        <div style={{fontSize: 20}}>리액트 공부하기</div>
        <div style={{fontSize: 15}}>리액트 기초를 공부합니다.</div>
        <div> 
        <button className='deleteButton' onClick={deleteButtonHandler}>삭제하기</button>
        <button className='completeButton' onClick={completeButton}>완료</button>
        </div>
      </div>
      
      <div>Done</div>
      </div>
  );
}

export default App;
