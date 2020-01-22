import React from 'react'

const Preloader = props => {
  return (
    <div className="valign-wrapper py-7">
      <div className="progress purple lighten-4">
        <div className="indeterminate purple" />
      </div>
    </div>
  )
}

export default Preloader
