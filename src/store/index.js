import { configureStore } from '@reduxjs/toolkit'

import goalsReducer from './goals-slice'

const store = configureStore({reducer:{goals:goalsReducer}})


export default store