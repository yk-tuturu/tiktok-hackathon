import { useCallback, useEffect, useState, useRef } from '@lynx-js/react'

import '../styles/App.css'
import type { NodesRef } from '@lynx-js/types';
import { uid } from 'uid';
// normal button 
export function TextButton(props: {
  onClick: ()=>void,
  text: string
}) {

  const id = uid(8);

  function handleTap() {
    props.onClick()
  }
  

  return (
    <view 
      id={"button" + id}
      className="button" 
      style={{width: "fit-content"}}
      bindtap={handleTap}
      // just wanted a bit of highlight when the user taps the button
      // not sure if this is the best way to do it 
      // im just going off lynx docs
      // selects by id, which i've set to the button+the text inside the button
      // no unique id guarantee but it'll have to do
      bindtouchstart={() => {
          lynx
            .createSelectorQuery()
            .select("#button" + id)
            .setNativeProps({
              'background-color': '#023f63',
            })
            .exec();
        }}
      bindtouchend={() => {
          lynx
            .createSelectorQuery()
            .select("#button" + id)
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
