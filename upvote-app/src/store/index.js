import { createStore } from 'vuex'

import upvote from '../modules/upVote'

const store = createStore({
    modules: {
        upvote,
    },
})

export default store;