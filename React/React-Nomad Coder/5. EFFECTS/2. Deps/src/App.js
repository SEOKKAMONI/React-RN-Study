import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => { // useEffect function은 코드가 딱 한번만 실행될 수 있도록 보호 해줌.
    console.log("I run only once."); // 시작할때 한번만 실행됨
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");

    // if(keyword !== "" && keyword.length > 5) { // keyword의 길이가 5보다 길고 빈값이 아닐때 실행
    //   console.log("SEARCH FOR", keyword);
    // }
  }, [keyword]); // keyword가 변화할때만 실행됨

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]); // counter가 변화할때만 실행됨

  useEffect(() => {
    console.log("I run when keyword & counter change.");
  }, [counter, counter]); // counter 또는 keyword 가 변화할때만 실행됨

  
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange}
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;