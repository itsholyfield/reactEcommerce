 import React from 'react';
 import LeftBanner from '../../assets/leftBanner.png';
 import RightBanner from '../../assets/rightBanner.png';
 import './styles.scss'

 const Directory = props => {
     return (
         <div className="directory">
            <div className="wrap">
                <div className="item"
                    style={{
                        backgroundImage: `url(${LeftBanner})`
                    }}>
                        <a>
                            Take Survey
                        </a>
                </div>
                <div className="item"
                    style={{
                        backgroundImage: `url(${RightBanner})`
                    }}>
                        <a>
                            FAQs
                        </a>
                </div>
            </div>
            
         </div>
     )
 }

 export default Directory;
