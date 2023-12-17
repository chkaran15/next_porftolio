"use client"
import React, { useEffect, useState } from 'react'

function TagCard({item}:{item:string}) {
    const [color , setColor] = useState({
        text_color:"",
        bg_color:"",
    })

    useEffect(() =>{
        if(item === "Research"){
            setColor({
                text_color:"#C11574",
                bg_color:"#FDF2FA"
            })
        }
        else if(item === "UI UX"){
            setColor({
                text_color:"#027A48",
                bg_color:"#ECFDF3"
            })
        }
        else if(item === "UI Design"){
            setColor({
                text_color:"#026AA2",
                bg_color:"#F0F9FF"
            })
        }
        else if(item === "Programming"){
            setColor({
                text_color:"#6941C6",
                bg_color:"#F9F5FF"
            })
        }
        else if(item === "Developments"){
            setColor({
                text_color:"#3538CD",
                bg_color:"#EEF4FF"
            })
        }
    },[item])

  return (
    <div className={`px-10 py-[2px] text-[${color?.text_color}] bg-[${color?.bg_color}] rounded-[20px]`}>
  {item}
  </div>
  )
}

export default TagCard