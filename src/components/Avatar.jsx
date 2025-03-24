import React from 'react'

const Avatar = ({avatar , height = "h-13" , width = "w-13"}) => {
    return (
        <div className={`${height} ${width} rounded-full overflow-hidden`}>
            <img src={avatar} alt="User Avatar Image" className="w-full h-full object-cover" />
        </div>
    )
}

export default Avatar;
