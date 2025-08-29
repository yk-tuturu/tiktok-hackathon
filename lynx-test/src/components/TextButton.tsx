import { useCallback, useEffect, useState, useRef } from '@lynx-js/react'

import '../styles/App.css'
import type { NodesRef } from '@lynx-js/types';

// normal button 
export function TextButton(props: {
  onClick: ()=>void,
  text: string
}) {

  function handleTap() {
    props.onClick()
  }
  

  return (
    <view 
      id={"button" + props.text}
      className="button" 
      style={{width: "fit-content"}}
      bindtap={handleTap}
      bindtouchstart={() => {
          lynx
            .createSelectorQuery()
            .select("#button" + props.text)
            .setNativeProps({
              'background-color': '#023f63',
            })
            .exec();
        }}
      bindtouchend={() => {
          lynx
            .createSelectorQuery()
            .select("#button" + props.text)
            .setNativeProps({
              'background-color': '#016BA9',
            })
            .exec();
        }}
      >
        <text className="button-text font-sm">{props.text}</text>
    </view>
  )
}
