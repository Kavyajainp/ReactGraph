import { createStore, combineReducers } from "redux";


//const counterReducer = (state = {statusFilter : '',typeFilter:'',priorityFilter:'',},action) =>{
const counterReducer = (state = {filterBy : "status", filterSelectedValue:""},action) =>{
  
    if(action.type == "filterBy"){
        return {
            filterBy : action.value,
            filterSelectedValue:""
        }
    }
    if(action.type == "selectedSubFilterVal"){
        return {
            filterBy : state.filterBy,
            filterSelectedValue:action.value
        }
    }
  
   return state
}
const combinedReducer = combineReducers({counterReducer})
const store = createStore(combinedReducer);
export default store;
