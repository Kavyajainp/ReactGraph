import { createStore, combineReducers } from "redux";


const counterReducer = (state = {typeFilter:[],statusFilter:[],priorityFilter:[]},action) =>{
  
    if(action.type == "selectedStatusFilterValue"){
        return {
           
            statusFilter: action.value,
            typeFilter:state.typeFilter,
            priorityFilter:state.priorityFilter
        }
    }
    if(action.type == "selectedTypeFilterValue"){
        return {
            statusFilter:state.statusFilter,
            typeFilter: action.value,
            priorityFilter:state.priorityFilter
        }
    }
    if(action.type == "selectedPriorityFilterValue"){
        return {
            statusFilter:state.statusFilter,
            typeFilter: state.typeFilter,
            priorityFilter:action.value
        }
    }
  
   return state
}
const combinedReducer = combineReducers({counterReducer})
const store = createStore(combinedReducer);
export default store;
