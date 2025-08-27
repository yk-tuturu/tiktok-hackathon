import { useCallback, useEffect, useState } from '@lynx-js/react'


import '../styles/App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'

import { SafeAreaView } from '../components/SafeAreaView.js'

export function Home(props: {
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
      <SafeAreaView>
        <view>
        <text className="font-lg mb-2">Upload text</text>
        <view className="inputWrapper">
          <input
          bindinput={handleInput}
          className="inputBox mb-4"
          placeholder="Search products hee..."
        />
        </view>
        <view className="submitButton">
          <text>Submit</text>
        </view>
        
      </view>
      </SafeAreaView>
      

      
  )
}
