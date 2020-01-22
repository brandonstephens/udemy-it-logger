import React, { useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchLogs, clearSearchLogs } from '../../actions/logActions'

const SearchBar = ({ searchLogs, clearSearchLogs }) => {
  const text = useRef('')

  const onChange = event => {
    searchLogs(text.current.value)
  }

  const clearSearch = () => {
    clearSearchLogs()
  }

  return (
    <nav className="purple mb-5">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" required placeholder="Search logs" ref={text} onChange={onChange} />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons" onClick={clearSearch}>
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  )
}

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
  clearSEarchLogs: PropTypes.func.isRequired,
}

export default connect(
  null,
  { searchLogs, clearSearchLogs }
)(SearchBar)
