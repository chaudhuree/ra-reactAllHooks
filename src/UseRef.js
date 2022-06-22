import React,{useState,useEffect,useRef} from 'react'

function UseRef() {
const [inputValue, setInputValue] = useState("");
const count = useRef(0);
const btnRef= useRef()

useEffect(() => {
  count.current = count.current + 1;
  btnRef.current.innerText=inputValue;
});


return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <button ref={btnRef} onClick={()=>setInputValue('')}>hi this is a button</button>
    </>
  );
}

export default UseRef


