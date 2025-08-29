import { useCallback, useEffect, useState } from '@lynx-js/react'


import '../styles/App.css'
import '../styles/imageUpload.css'
import { TextButton } from '../components/TextButton.js'

import { SafeAreaView } from '../components/SafeAreaView.js'

export function ImageUpload(props: {

}) {

  return (
    <SafeAreaView>
        <view className="align-left-container">
            <text className="heading-text font-lg font-bold align-left">Scan Your Image</text>
        </view>
            
        
    </SafeAreaView> 
  )
}
