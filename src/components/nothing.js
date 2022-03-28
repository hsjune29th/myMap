import React, { useRef, useEffect, useState } from "react";

export default function Countdown() {
  const [num, setNum] = useState(1000);
  
  let intervalRef = useRef();
  
  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  
  return (
    <div>
     <h2> Please wait {num} seconds</h2>
    
    </div>
  );
}