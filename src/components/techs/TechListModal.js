import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TechItem from './TechItem'
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions'

const TechListModal = ({ techs, loading, getTechs }) => {
  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Tech List</h4>
        <ul className="collection">
          {!loading && techs !== null && techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  )
}

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  techs: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
})

export default connect(
  mapStateToProps,
  { getTechs }
)(TechListModal)
