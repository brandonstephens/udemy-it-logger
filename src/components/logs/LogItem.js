import React from 'react'
import PropTypes from 'prop-types'

const LogItem = ({ log, ...props }) => {
  const { id, message, attention, date, tech } = log
  return <li {...props}>{message}</li>
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
}

export default LogItem
