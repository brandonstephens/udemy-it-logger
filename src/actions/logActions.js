import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
  CLEAR_SEARCH_LOGS,
} from './types'

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading()
    const response = await fetch('/logs')
    const data = await response.json()

    dispatch({
      type: GET_LOGS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    })
  }
}

// Add new log
export const addLog = log => async dispatch => {
  try {
    const response = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    dispatch({
      type: ADD_LOG,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data })
  }
}

// Delete log
export const deleteLog = id => async dispatch => {
  try {
    setLoading()
    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    })

    dispatch({
      type: DELETE_LOG,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    })
  }
}

// Update log on server
export const updateLog = log => async dispatch => {
  try {
    setLoading()
    const response = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    })
  }
}

// Search logs
export const searchLogs = text => async dispatch => {
  try {
    setLoading()
    const response = await fetch(`/logs?q=${text}`)
    const data = await response.json()

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    })
  }
}

// Clear search Logs
export const clearSearchLogs = () => {
  return {
    type: CLEAR_SEARCH_LOGS,
  }
}

// Set Current Log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log,
  }
}

// Clear Current Log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  }
}

// Set loading to true
export const setLoading = () => {
  return { type: SET_LOADING }
}
