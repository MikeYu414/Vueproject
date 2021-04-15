import {Constant} from "@/commonjs/constants.js";

const state = {
    userState: Constant.userState.offLine,
    userName: '',
    userAccount: '',
    userPhone: '',
    userPhoto: ''
}

const getters = {
    getUserInfo(state) {
        return state;
    }
}

const actions = {

}

const mutations = {
    setToLogin(state, flag) {
        if (flag == false) {
            state.userState = Constant.userState.offLine;
        }
        else {
            state.userState = Constant.userState.onLine;
        }
    },

    updateUserInfo(state, userInfo) {
        if (userInfo.userName) {
            state.userName = userInfo.userName;
        }
        if (userInfo.userState) {
            state.userState = userInfo.userState;
        }
        if (userInfo.userPhone) {
            state.userPhone = userInfo.userPhone;
        }
        if (userInfo.userPhoto) {
            state.userPhoto = userInfo.userPhoto;
        }
        if (userInfo.userAccount) {
            state.userAccount = userInfo.userAccount;
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}