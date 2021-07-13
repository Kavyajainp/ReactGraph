
import { useDispatch,useSelector } from 'react-redux'
import data from '../data.json'
const StatusFilter = () => { 
    const dispatch = useDispatch()
    const listOfStatus = [...new Set(data.records.map(item => item.status) )]
    const listOfType = [...new Set(data.records.map(item => item.issue_type) )]
    const listOfPriorities = [...new Set(data.records.map(item => item.priority) )]

    const reducerState = useSelector((state) => state.counterReducer);
    const {filterBy} = reducerState;

    const onCangeFilterHandler = ($event)=>{
        dispatch({type:'filterBy', value: $event.target.value})
    }
    const onChangeSelection = ($event)=>{
        const selectedValues=[];
        let selectedOption=$event.target.selectedOptions;
     
        for (let i = 0; i < selectedOption.length; i++){
            selectedValues.push(selectedOption.item(i).value)
        }
        dispatch({type:'selectedSubFilterVal', value: selectedValues}) 
    }
    const renderOptions = () => {
        if(filterBy == undefined){
            return   listOfStatus.map((item ,index) => (
                <option value={item} key={index}>{item}</option>
            ))
        }
        if (filterBy === 'status') {
          return   listOfStatus.map(item => (
                        <option value={item}>{item}</option>
                    ))
        }
        else if (filterBy === 'type' ) {
            return   listOfType.map(item => (
                          <option value={item}>{item}</option>
                      ))
        }
        else if (filterBy === 'priority') {
            return   listOfPriorities.map(item => (
                          <option value={item}>{item}</option>
                      ))
          }
      
      }
    
    return(
        <div className="selectWrapper">
            <label htmlFor="filterBy"> Filter By : </label>
            <select onChange={onCangeFilterHandler}>
               <option value="status"> Status</option>
               <option value="type"> Type</option>
               <option value="priority"> Priority</option>
           </select>
          
        <label htmlFor="subValues"> Select :</label>
        <select multiple onChange={onChangeSelection}>
           {renderOptions()}
        </select>
        </div>
    )
}

export default StatusFilter