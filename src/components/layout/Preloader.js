import React from 'react'

const Preloader = props => {
  return (
    <div className="valign-wrapper py-7">
      <div className="progress blue lighten-4">
        <div className="indeterminate blue" />
      </div>
    </div>
  )
}

export default Preloader
