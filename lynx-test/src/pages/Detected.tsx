import { useCallback, useEffect, useState } from '@lynx-js/react'

import '../styles/App.css'


// page that shows up after you upload your text/image
export function Detected(props: {
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

  return (
    <view>
      <text>Upload text</text>
    </view>
  )
}
