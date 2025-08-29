import { useCallback, useEffect, useState } from '@lynx-js/react'


import '../styles/App.css'
import { TextButton } from '../components/TextButton.js'

import { SafeAreaView } from '../components/SafeAreaView.js'

export function ImageScanResult(props: {

}) {

  return (
    <SafeAreaView>
      <text className="heading-text font-bold font-lg">Image Scan Result</text>
    </SafeAreaView>
  )
}
