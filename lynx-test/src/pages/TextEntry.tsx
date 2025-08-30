import { useCallback, useEffect, useState } from '@lynx-js/react'



import '../styles/App.css'
import { TextButton } from '../components/TextButton.js'

import { SafeAreaView } from '../components/SafeAreaView.js'

// mostly placeholder stuff i was randomly cooking up before
// @joanne just change it according to your design
export function TextEntry(props: {
  onRender?: () => void
}) {
  const [input, setInput] = useState("");
  const handleInput = (event: any) => {
    setInput(event.detail.value);
  };

  return (
    <>
    <SafeAreaView>

        <text className="font-lg font-bold" style={{marginTop: "50px"}}>Upload text</text>
        <text>Paste your caption here our AI model to detect sensitive information</text>
        <view className="inputWrapper">
          <textarea
          bindinput={handleInput}
          className="inputBox mb-4"
          placeholder="Paste your xt here"
        />
        </view>
        <TextButton onClick={()=>{}} text="Submit"></TextButton>

      
      </SafeAreaView>
      
    </>
      
      

      
  )
}
