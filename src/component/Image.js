import React from 'react'

function Image(props) {
    const {url}=props;
  return (
    <>
        <img className="card--image" src={url}  width="90%" height="100%" download alt={url} />
    </>
  )
}

export default Image