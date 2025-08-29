import '@lynx-js/preact-devtools'
import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'
import { MemoryRouter, Routes, Route } from 'react-router';

import { TextEntry } from './pages/TextEntry.js'
import {Detected} from "./pages/Detected.js"

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
