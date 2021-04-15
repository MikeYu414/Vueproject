export const Constant = {
    userState: {
        onLine: 1,
        offLine: 2,
        away: 3
    }
}

export const ConstantForMixin = {
    data() {
        return{
            Constant
        }
    }
}