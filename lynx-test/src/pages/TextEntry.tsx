import { useCallback, useEffect, useState } from '@lynx-js/react'


import '../styles/App.css'
import { TextButton } from '../components/TextButton.js'

import { SafeAreaView } from '../components/SafeAreaView.js'

export function TextEntry(props: {
  onRender?: () => void
}) {
  const [alterLogo, setAlterLogo] = useState(false)

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])
  props.onRender?.()

  const onTap = useCallback(() => {
    'background only'
    setAlterLogo(prevAlterLogo => !prevAlterLogo)
  }, [])

  const [search, setSearch] = useState("");
  const handleInput = (event: any) => {
    setSearch(event.detail.value);
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
