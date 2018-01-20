import axios from "axios";

export const apiClient = axios.create({
	baseURL: "http://localhost:8983/solr/",
	timeout: 10000, /* Some of the actions take multiple API calls. Example Loxa Script can take upto 3 API calls */
	headers: {
		"Content-Type": "application/json"
	}
});

export function fetchPlayers() {
	return (dispatch) => {
		return apiClient.get("premStats/select?indent=on&q=name:Aaron%20Cresswell&wt=json")
			.then((response) => response.data)
			.then((data) => dispatch(receivePlayer(data)))
			.catch((error) => {
				if (error.status >= 400) {
					throw new Error("Bad response from server");
				}
			});
	};
}

function receivePlayer(data) {
	return{
		type: "RECEIVE_PLAYERS",
		data
	}
}