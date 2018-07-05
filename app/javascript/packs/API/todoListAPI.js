export const todoListAPI = (path, method, params, successAction, failAction) => {
  return dispatch => {
    const jwtToken = document.cookie.match(/jwt_token=(.*)$/g)[0]
    fetch(`${path}.json`, {
      method: `${method}`,
      body: params && JSON.stringify(params),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authentication": `Bearer ${jwtToken}`
      })
    })
      .then(response => response.json())
      .then(
        result => (dispatch(successAction(result))),
        error => (dispatch(failAction(error)))
      )
  }
}