export default {
    state: ()  => ({
        voteBlocks: [
            { id: 1, isUpVote: true , count: 3   },
            { id: 2, isUpVote: false , count: 2   },
            { id: 3, isUpVote: true , count: 5   },
        ]
    }),
    getter : {},
    mutations: {
        TOGGLE_BLOCK(state, id) {
            if(state.voteBlocks[id -1].isUpVote == true) {
                state.voteBlocks[id -1].isUpVote = false
            } else {
                state.voteBlocks[id -1].isUpVote = true
            }
        },
        ADD_VOTE(state, id) {
            state.voteBlocks[id -1].count++;
        }
    },
    actions:{
        addVote({commit}, id) {
            commit("ADD_VOTE", id)
        },
        toggle({commit}, id) {
            commit("TOGGLE_BLOCK", id)   
        }
    }

}