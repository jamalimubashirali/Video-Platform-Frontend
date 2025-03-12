import React from 'react'

const Container = ({children , className}) => {
  return (
    <div className={`max-auto p-4 ${className}`}>
      {children}
    </div>
  )
}

export default Container;
