import React from 'react';
import './App.css';  // CSS 스타일 파일 import
import PersonalInfo from './PersonalInfo'; // PersonalInfo 컴포넌트 임포트

function App() {
  return (
    <div className="App">
      <header>
        <h1>자기소개서</h1> {/* header 내용 */}
      </header>

      {/* PersonalInfo 컴포넌트 호출 */}
      <PersonalInfo 
        name="최현석" 
        age="비공개" 
        hobby="게임" 
        mbti="ISTP" 
      />
    </div>
  );
}

export default App;