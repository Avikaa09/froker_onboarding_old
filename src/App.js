import {Space, Menu} from "antd";
import './App.css';
import Sidebar from './components/Sidebar/index';
import Header from './components/Header/index';
import Content from './components/Content/index';


function App() {
  return (
    <div className="App">
       <Header/>
       <Space className="sidemenu">
      <Sidebar/>
      
      <Content/>
      </Space>
     
    </div>
  );
}

export default App;
