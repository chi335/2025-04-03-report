function PersonalInfo({ name, age, hobby, mbti }) {
    return (
      <div className="info-container">
      <h2>자기 소개</h2>
        <p><span className="label">이름:</span> {name}</p>
        <p><span className="label">나이:</span> {age}</p>
        <p><span className="label">취미:</span> {hobby}</p>
        <p><span className="label">MBTI:</span> {mbti}</p>
      </div>
    );
  }
  
  export default PersonalInfo;