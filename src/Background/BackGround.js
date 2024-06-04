import React from "react";
import background from '../Assets/Background.svg'
import './BackGround.css'
const BackGround = () => {
    return(
        <div>
        <img src={background} alt = 'banner_img' className="background_image"/>
        </div>
    )
}

export default BackGround