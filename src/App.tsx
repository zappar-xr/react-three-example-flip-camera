import React, { useState } from 'react';
import { ZapparCamera, ZapparCanvas, BrowserCompatibility } from '@zappar/zappar-react-three-fiber';

function App() {
  const [useFrontCamera, setUseFrontCamera] = useState(true);
  return (
    <>
      <BrowserCompatibility />
      <ZapparCanvas>
        <ZapparCamera userFacing={useFrontCamera} />
      </ZapparCanvas>
      <div
        id="zappar-button"
        role="button"
        onKeyPress={() => { setUseFrontCamera((currentMode) => !currentMode); }}
        tabIndex={0}
        onClick={() => { setUseFrontCamera((currentMode) => !currentMode); }}
      >
        Tap here to switch to
        {useFrontCamera ? ' front ' : ' rear '}
        camera
      </div>
    </>
  );
}
export default App;


