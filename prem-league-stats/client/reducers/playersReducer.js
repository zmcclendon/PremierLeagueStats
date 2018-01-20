export function playersReducer(state = {
	isFetching: false
}, action) {
	switch (action.type) {
		case "RECEIVE_PLAYERS":
			return Object.assign({}, state, {
				isFetching: true,
				players: action.data.response.docs
			});
		default:
			return state
	}
}