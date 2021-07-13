
import data from '../data.json'
import ChartistGraph from 'react-chartist';
import {useSelector, useDispatch} from 'react-redux'

const Graph = () => { 
    const dispatch = useDispatch()

    const reducerState = useSelector((state) => state.counterReducer);
    const {filterBy, filterSelectedValue} = reducerState;
   
    const listOfStatus = [...new Set(data.records.map(item => item.status) )]
    const listOfType = [...new Set(data.records.map(item => item.issue_type) )]
    const listOfPriorities = [...new Set(data.records.map(item => item.priority) )]
   
    const xAxis = [...new Set(data.records.map(item => item.assignee))];

    let countOfTickets =[];
    const getCountOfTickets = () =>{
         countOfTickets =[]
         let count = 0
         let filteredItem = []
         xAxis.forEach(element => {
            if(filterSelectedValue != ""){
                switch(filterBy){
                    case "status" : 
                            filteredItem = data.records.filter(item => item.assignee === element && filterSelectedValue.indexOf(item.status) >-1)
                            break;
                    case "type" : 
                            filteredItem = data.records.filter(item => item.assignee === element && filterSelectedValue.indexOf(item.issue_type) >-1)
                            break;  
                    case "priority" : 
                            filteredItem = data.records.filter(item => item.assignee === element && filterSelectedValue.indexOf(item.priority) >-1)
                            break; 
                }
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