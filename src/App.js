
import './App.css';
import Graph from './components/Graph'
import StatusFilter from './components/StatusFilter'
import {Provider} from 'react-redux'
import store from './store/index'

function App() {

  return (
   <Provider store={store}>
     <StatusFilter/>
     <Graph/>
    </Provider>
 
  );
}

export default App;
