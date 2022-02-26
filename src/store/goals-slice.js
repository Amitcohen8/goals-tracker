import { createSlice } from "@reduxjs/toolkit"


const goalsSlice = createSlice({
    name:'goals',
    initialState: {
       allGoals:[{category:'בריאות',week:['summarize 5 AM Club','finish atomic habits'],day:['read 30 pages in my book'],month:['raise pull ups set to 20'],year:['eat vegan','no coffee']}] 
    },
    reducers: {
        addGoal(state,action){
            const newItem = action.payload;
            state.allGoals.push(newItem)
        }
    }

})


export const goalsActions = goalsSlice.actions

export default goalsSlice.reducer