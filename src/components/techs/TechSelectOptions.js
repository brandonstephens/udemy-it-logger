import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTechs } from '../../actions/techActions'
import PropTypes from 'prop-types'

const TechSelectOptions = ({ getTechs, techs, loading }) => {
  useEffect(() => {
    getTechs()
    // eslint-disabled-next-line
  }, [])
  return (
    <>
      {!loading &&
        techs !== null &&
        techs.map(techItem => (
          <option key={techItem.id} value={`${techItem.firstName} ${techItem.lastName}`}>
            {techItem.firstName} {techItem.lastName}
          </option>
        ))}
    </>
  )
}

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
})

export default connect(
  mapStateToProps,
  { getTechs }
)(TechSelectOptions)
