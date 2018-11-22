import * as types from "./mutation-types";

const mutations = {
	[types.SET_LOGIN](state, data) {
		localStorage.user = JSON.stringify(data);
		state.user= data;
	},
    [types.SET_LOGOUT](state) {
        localStorage.removeItem('user');
        state.user = null
    },
    [types.SET_STATUS](state, num) {
        localStorage.status = JSON.stringify({status: num});
        state.status = num;
    },
    [types.SET_TOKEN](state, token) {
        localStorage.token = token;
        state.token = token;
    }
}
export default mutations
