import Vue from 'vue'

export default {
    updateState (state, obj) {
        for(var key in obj) {
            state[key] = obj[key]
        }
    },
}
