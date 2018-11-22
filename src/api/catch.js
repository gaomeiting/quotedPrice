
import router from "../router"
import store from "../store"
import { Dialog } from 'vant'

export function handlerError(err) {
    if (err) {
        /* if(err.status == 401) {
            store.commit('SET_LOGOUT');
            let supplyToken= store.state.token
            router.replace({
                path: '/login',
                query: {redirect: router.currentRoute.fullPath, supplyToken: supplyToken }
            })
            return;
        } */
        if (err.message) {
            Dialog.alert({
                message: `${err.message}`
            })
        } else {
            Dialog.alert({
                message: `${err.error}`
            })
        }
    } else {
        Dialog.alert({
            message: `未知意外`
        })
    }
}
