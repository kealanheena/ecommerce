import React from 'react';

function SidePanel({ isOpen }) {  
  // todo: move these styles into scss.. 
  return (
    <div style={{
        width: '500px',
        height: '100%',
        zIndex: 1,
        backgroundColor: 'white',
        position: 'fixed',
        top: '56px',
        right: isOpen ? 0 : '-500px',
        transition: '0.5s'
    }}>
      <p>This will be an awsome shopping cart some day...</p>
    </div>
  );
}

export default SidePanel;
