import { useCallback, useEffect, useState } from '@lynx-js/react'


import '../styles/App.css'
import '../styles/imageUpload.css'
import { TextButton } from '../components/TextButton.js'

import { SafeAreaView } from '../components/SafeAreaView.js'

export function ImageUpload(props: {

}) {

  return (
    <SafeAreaView>
        <view className="align-left-container mt-4">
            <text className="heading-text font-lg font-bold align-left">Scan Your Image</text>
            <text className="subtitle-text font-light mt-2" style={{fontSize: "18px"}}>Detect faces, documents, and private details in your photos</text>
        </view>
        <view className="upload-image-container">

        </view>
        <view class="divider">
            <text class="divider-text subtitle-text font-light">or</text>
        </view>
            
        
    </SafeAreaView> 
  )
}
