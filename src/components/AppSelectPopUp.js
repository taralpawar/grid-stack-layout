import React, { useState } from 'react';
import '../GridStack.css';
import CAM_icon from '../media/appIcons/Cam_up.png';
import Waveform_icon from '../media/appIcons/Waveform_up.png';
import Vector_icon from '../media/appIcons/Vector_up.png';
import CIE_icon from '../media/appIcons/CIE_up.png';
import Audio_icon from '../media/appIcons/Audio_up.png';
import Picture_icon from '../media/appIcons/Picture_up.png';
import Audio_app from '../media/images/audio_app.png';
import Cam_app from '../media/images/cam_app.png';
import Vector_app from '../media/images/vector_app.png';
import CIE_app from '../media/images/cie_app.png';
import Waveform_app from '../media/images/waveform_app.png';
import Picture_app from '../media/images/picture_app.png';


const AppSelectPopUp = (props) => {

    const [selectedOption, setSelectedOption] = useState('');
    const [apps, setApps] = useState([{
      name: 'Waveform',
      icon: Waveform_icon,
      app: Waveform_app
    },
    {
      name: 'Picture',
      icon: Picture_icon,
      app: Picture_app
    },
    {
      name: 'Audio',
      icon: Audio_icon,
      app: Audio_app
    },
    {
      name: 'CIE',
      icon: CIE_icon,
      app: CIE_app
    },
    {
      name: 'Vector',
      icon: Vector_icon,
      app: Vector_app
    },
    {
      name: 'CAM',
      icon: CAM_icon,
      app: Cam_app
    }]);

    const handleOptionChange = (name) => {
        let appObj = apps.find(o => o.name === name);
        props.addItem(appObj.name, appObj.app);
        props.handleClose();
    };

    return(
        <>
        <div className="popup-overlay"> 
          <div className="popup-content">
            <div className='popup-header'>
              <h2>Widgets</h2>
              <button onClick={props.handleClose} style={{background: "none", cursor: "pointer"}}>
                <i className="fa fa-close" style={{fontSize: "1.5em"}}></i>
              </button>
            </div>
            
            <div className='popup-container'>
              {apps.map((app) => {
                return(
                  <>
                  <div className='app-icon-container' onClick={() => handleOptionChange(app.name)} key={app.name}>
                    <img src={app.icon} />
                  </div>
                </>
                )
                
              })}
            </div>             
          </div>
        </div>
      </>
    );
}

export default AppSelectPopUp;