import { useCallback, useEffect, useState } from '@lynx-js/react'

import '../styles/App.css'
import "../styles/Loading.css"
import "../styles/ButtonStyles.css"

import { OutlineButton } from '../components/OutlineButton.js'

import { SafeAreaView } from '../components/SafeAreaView.js'

import { useNavigate } from 'react-router'

export function Loading(props: {

}) {

  const nav = useNavigate();

  return (
    <SafeAreaView>
      <view className="loading-container">
        <text className="heading-text font-bold font-md align-center">Analyzing your content for privacy risks...</text>
        <view class="spinner"></view> 
        <text className="subtitle-text font-light font-sm mt-5">Your security is our top priority</text>     
        <OutlineButton onClick={()=>{}} style={{marginTop: "64px"}}>
          <text className="subtitle-text outline-button-text">Cancel</text>
        </OutlineButton>
        <OutlineButton onClick={()=>{nav("/imageResult")}} style={{marginTop: "64px"}}>
          <text className="subtitle-text outline-button-text">(Debug) Next</text>
        </OutlineButton>
      </view>
    </SafeAreaView> 
  )
}
