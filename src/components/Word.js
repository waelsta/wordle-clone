import React, { useEffect,useState } from 'react'
import Letter from './Letter.js'
function Word() {
    const [wordValue,setWordValue] = useState("");

    useEffect(()=>{
        window.addEventListener('keydown',(event)=>{
            if(event.key === 'enter'){
                if(wordValue.length === 5){
                    
                }else{
                    return;
                }
            }else if(event.key === 'Backspace'){
                setWordValue(wordValue.slice(0,-1));
            }else
            {
                setWordValue(wordValue + event.key);
            }
        })
    })

  return (
    <div className="word">
        <Letter value={wordValue[0]}/>
        <Letter value={wordValue[1]}/>
        <Letter value={wordValue[2]}/>
        <Letter value={wordValue[3]}/>
        <Letter value={wordValue[4]}/>
        
    </div>
  )
}

export default Word