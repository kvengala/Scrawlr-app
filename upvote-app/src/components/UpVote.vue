<template>
    <div>
       <h1  class="flex pl-8 pt-8 bold items-center mb-2">Upvote APP </h1>
        <div v-for="voteBlock in voteBlocks" :key="voteBlock"  class="flex pl-8 items-center mb-2" >
            <div v-if="voteBlock.isUpVote === true" class="p-1 mr-4 border-myDarkGrey border-9 rounded inline-block" >
                <button @click="handleSelected(voteBlock.id)" class="m-2 bg-myLightBlue p-1 pl-3 pr-3 rounded-lg text-myBlue" v-for="index in voteBlock.count" :key="index">
                    <font-awesome-icon :icon="['fa', 'arrow-up']" />
                </button>
            </div>
            <div v-else class="p-1 mr-4  pl-100 border border-myDarkGrey border-9 rounded inline-block">
               <button @click="handleSelected(voteBlock.id)" class="m-2 bg-myGrey p-1 pl-3 pr-3 rounded-lg text-myBlack" v-for="index in voteBlock.count" :key="index">
                    <font-awesome-icon :icon="['fa', 'arrow-up']" />
                </button>
            </div> 
             <button @click="handleAddVote(voteBlock.id)" class="bg-myGrey p-1 pl-3 pr-3 rounded-lg text-myBlack">
                <font-awesome-icon :icon="['fa', 'plus']" />
            </button>   
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'


 const store  = useStore()

 const voteBlocks = computed(() => {
     return store.state.upvote.voteBlocks
 })

 const handleSelected = (id) => {
     store.dispatch("toggle", id)
 }

 const handleAddVote = (id) => {
     store.dispatch("addVote", id)
 }

</script>
