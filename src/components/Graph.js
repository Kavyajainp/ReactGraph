
import data from '../data.json'
import ChartistGraph from 'react-chartist';
import {useSelector, useDispatch} from 'react-redux'

const Graph = () => { 
    const reducerState = useSelector((state) => state.counterReducer);
    const {statusFilter,typeFilter,priorityFilter} = reducerState;
   
    const xAxis = [...new Set(data.records.map(item => item.assignee))];

    let countOfTickets =[];
    const getCountOfTickets = () =>{
         countOfTickets =[]
         let count = 0
         let filteredItem = []
         xAxis.forEach(element => {
            if(statusFilter.length > 0 && typeFilter.length > 0 && priorityFilter.length > 0){
                filteredItem = 
                data.records.filter(item => item.assignee === element && statusFilter.indexOf(item.status) >-1 && priorityFilter.indexOf(item.priority) >-1 && typeFilter.indexOf(item.issue_type) >-1)
            }
            else if(statusFilter.length > 0 && typeFilter.length > 0){
              filteredItem = 
                data.records.filter(item => item.assignee === element && statusFilter.indexOf(item.status) >-1 && typeFilter.indexOf(item.issue_type) >-1 )
            }else if(statusFilter.length > 0 && priorityFilter.length > 0){
              filteredItem = 
              data.records.filter(item => item.assignee === element && statusFilter.indexOf(item.status) >-1 && priorityFilter.indexOf(item.priority) >-1 )
            }
            else if(typeFilter.length > 0 && priorityFilter.length > 0){
              filteredItem = 
              data.records.filter(item => item.assignee === element &&  typeFilter.indexOf(item.issue_type) >-1  && priorityFilter.indexOf(item.priority) >-1 )
            }
            else{
                filteredItem = data.records.filter(item => item.assignee === element) 
            }
            count = filteredItem.length
            countOfTickets.push(count)
          
         });
         return countOfTickets
     }
const chart = {
    data: {
      labels: xAxis,
      series: [getCountOfTickets()]
    },
    options: {
      axisX: {
        showGrid: false,
      },
      low: 0,
      chartPadding: {
        top: 50,
        right: 5,
        bottom: 0,
        left: 0,
      },
    },
   
  };
    return(
     <div>
        <div className="xAxisLbl">Tickets</div>
        <div className="graphWrapper">
            <ChartistGraph
                    className="ct-chart"
                    data={chart.data}
                    type="Bar"
                    options={chart.options}
                    height={850}
                />
            </div>
      </div>
    )
    
}
export default Graph    
