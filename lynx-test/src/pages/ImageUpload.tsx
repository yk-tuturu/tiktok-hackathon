import { useCallback, useEffect, useState } from '@lynx-js/react'
import cameraIcon from "../assets/camera.png";
import pictureIcon from "../assets/pictureIcon.png";

import '../styles/App.css'
import '../styles/imageUpload.css'
import "../styles/ButtonStyles.css"

import { TextButton } from '../components/TextButton.js'
import { SafeAreaView } from '../components/SafeAreaView.js'
import { ButtonLight } from '../components/ButtonLight.js'
import { Loading } from './Loading.js';

export function ImageUpload(props: {

}) {
    const [loading, setLoading] = useState(false);

    function submitPhoto() {
        // for now, it just shows our loading screen
        setLoading(true);
    }

  return (
    <>
    {
        loading ? 
        <view style={{position: "absolute", top: 0, bottom: 0, zIndex: 5, backgroundColor: "white"}}>
            <Loading/>
        </view> : <></>
    }
    
    <SafeAreaView>
        <view className="align-left-container mt-4">
            <text className="heading-text font-lg font-bold align-left">Scan Your Image</text>
            <text className="subtitle-text font-light mt-2 align-left" style={{fontSize: "18px"}}>Detect faces, documents, and private details in your photos</text>
        </view>
        <view className="upload-image-container">
            <image src={pictureIcon} style={{width: "24px", height: "24px"}}></image>
            <text className="subtitle-text mt-3">Select file</text>
        </view>
        <view class="divider">
            <text class="divider-text subtitle-text font-light">or</text>
        </view>
        <view style={{width: "100%", marginTop: "32px"}}>
        <ButtonLight onClick={()=>{}}>
            <view style={{width:"100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <image src={cameraIcon} style={{width: "16px", height: "16px", marginRight: "8px"}}></image>
                <text>Open Camera & Take Photo</text>
            </view>
        </ButtonLight>
        <view style={{marginTop: "90px", width: "100%", display: "flex", justifyContent: "center"}}>
            <TextButton onClick={submitPhoto} style={{padding: "16px 24px"}}>
                <text>Proceed to Scan</text>
            </TextButton>
        </view>
        </view>
        
            
        
    </SafeAreaView> 
    </>
    
  )
}
