import * as React from 'react';
import PermanentDrawer from './components/Drawer.jsx';
import Models from './components/Models.jsx';
import './App.css';


function App() {
  return (<>
      <PermanentDrawer/>
      <div className="model">
      <Models />
      </div>
      </>
    );
}

export default App;
