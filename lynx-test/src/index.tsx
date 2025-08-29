import '@lynx-js/preact-devtools'
import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'
import { MemoryRouter, Routes, Route } from 'react-router';

import { TextEntry } from './pages/TextEntry.js'
import {Detected} from "./pages/Detected.js"
import { Home } from './pages/Home.js';
import { TextScanResult } from './pages/TextScanResult.js';
import { TextCensored } from './pages/TextCensored.js';
import { ImageUpload } from './pages/ImageUpload.js';
import { ImageScanResult } from './pages/ImageScanResult.js';
import { ImageCensored } from './pages/ImageCensored.js';
import { Loading } from './pages/Loading.js';

// FIX ROUTER LATER!!
root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<TextEntry />} />
      <Route path="/detected" element={<Detected />} />
    </Routes>
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
