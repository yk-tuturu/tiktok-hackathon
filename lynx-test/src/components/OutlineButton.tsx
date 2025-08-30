import { useCallback, useEffect, useState, useRef } from '@lynx-js/react'
import type { CSSProperties } from '@lynx-js/types';

import '../styles/App.css'
import "../styles/ButtonStyles.css"
import type { NodesRef } from '@lynx-js/types';
import { uid } from 'uid';

// normal button 
export function OutlineButton(props: {
  onClick: ()=>void,
  children: React.ReactNode,
  style?: CSSProperties
}) {

  const id = uid(8);

  function handleTap() {
    props.onClick()
  }
  

  return (
    <view 
      id={"button" + id}
      className="outline-button" 
      style={{width: "fit-content", ...props.style}}
      bindtap={handleTap}
      // just wanted a bit of highlight when the user taps the button
      // not sure if this is the best way to do it 
      // im just going off lynx docs
      // selects by id, which i've set to the button+a unique id
      bindtouchstart={() => {
          lynx
            .createSelectorQuery()
            .select("#button" + id)
            .setNativeProps({
              'background-color': '#b5cce9ff',
            })
            .exec();
        }}
      bindtouchend={() => {
          lynx
            .createSelectorQuery()
            .select("#button" + id)
            .setNativeProps({
              'background-color': 'white',
            })
            .exec();
        }}
      >
        <view className="outline-button-text">
          {props.children}
        </view>
        
    </view>
  )
}
