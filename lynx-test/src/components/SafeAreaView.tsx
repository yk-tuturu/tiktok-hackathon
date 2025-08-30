import { useCallback, useEffect, useState } from '@lynx-js/react'

import '../styles/App.css'

// fake safeareaview where i just add padding for now
// not sure if react native safe area view works here 
export function SafeAreaView(props: {
  onRender?: () => void
  children?: React.ReactNode
}) {
  return (
    <view className="safe-area-view" style={{alignItems: "center"}}>
        {props.children}
    </view>
  )
}
