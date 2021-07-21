
import { useDispatch,useSelector } from 'react-redux'
import data from '../data.json'
const StatusFilter = () => { 
    const dispatch = useDispatch()
    const selectedTypeFilterVal = [];
    const selectedStatusFilterVal = [];
    const selectedPriorityFilterVal = [];

    const listOfStatus = [...new Set(data.records.map(item => item.status) )]
    const listOfType = [...new Set(data.records.map(item => item.issue_type) )]
    const listOfPriorities = [...new Set(data.records.map(item => item.priority) )]

    //const reducerState = useSelector((state) => state.counterReducer);
   
    
      const typeFilterHandler = ($event)=>{
          let val =$event.target.value
          let index = selectedTypeFilterVal.indexOf(val)
          if($event.target.checked && index <0)
            selectedTypeFilterVal.push(val)
          else if(!$event.target.checked)
            {
                
                if(index > -1){
                    selectedTypeFilterVal.splice(index,1)
                }
            }
            dispatch({type:"selectedTypeFilterValue", value:selectedTypeFilterVal})

      }
      const statusFilterHandler = ($event)=>{
        let val =$event.target.value
        let index = selectedStatusFilterVal.indexOf(val)
        if($event.target.checked && index<0)
          selectedStatusFilterVal.push(val)
        else if(!$event.target.checked)
          {
              
              if(index > -1){
                selectedStatusFilterVal.splice(index,1)
              }
          }
          dispatch({type:"selectedStatusFilterValue", value:selectedStatusFilterVal})

    }
    const priorityFilterHandler = ($event)=>{
        let val =$event.target.value
        let index = selectedPriorityFilterVal.indexOf(val)
        if($event.target.checked && index <0)
          selectedPriorityFilterVal.push(val)
        else if(!$event.target.checked)
          {
              if(index > -1){
                selectedPriorityFilterVal.splice(index,1)
              }
          }
          dispatch({type:"selectedPriorityFilterValue", value:selectedPriorityFilterVal})
          
    }
    
    return(
        <div className="selectWrapper">
            {/*<label htmlFor="filterBy"> Filter By : </label>
            <select onChange={onCangeFilterHandler}>
               <option value="status"> Status</option>
               <option value="type"> Type</option>
               <option value="priority"> Priority</option>
    </select>*/}
    <div className="list">
          <p>Status</p>
           <ul>
               {listOfStatus.map((item,index) => (
               <li key={index}><input key={index} type="checkbox"value={item}  onChange={statusFilterHandler}/>{item}
                   
                   </li>))}
                 
           </ul>
    </div> 
    <div className="list">   
           <p>Type</p>
           <ul className="list">
               {listOfType.map((item,index) => (
               <li key={index}><input key={index} type="checkbox" value={item} onChange={typeFilterHandler}/>{item}
                   
                   </li>))}
                 
           </ul>
    </div>
    <div className="list">       
           <p>Priority</p>
           <ul>
               {listOfPriorities.map((item,index) => (
               <li key={index}><input key={index} type="checkbox" value={item} onChange={priorityFilterHandler}/>{item}
                   
                   </li>))}
                 
           </ul>
    </div>       

          
       {/* <label htmlFor="subValues"> Select :</label>
        <select multiple onChange={onChangeSelection}>
           {renderOptions()}
        </select>*/}
        </div>
    )
}

export default StatusFilter
