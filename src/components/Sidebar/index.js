import { Menu } from "antd";
import {HeartOutlined,PercentageOutlined, AreaChartOutlined,LikeOutlined, LineChartOutlined} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import './index.css';
function Sidebar(){
    const navigate = useNavigate()
    return (<div className="sidebar">
        <Menu 

        onClick={(item) =>{
        navigate(item.key);}}
        items={
            [
                {
                    label: "Restaurants",
                    key:'/Restaurants',
                    icon: <HeartOutlined />
                },
                {
                    label:"Analytics",
                    key:'/Analytics',
                    children: [
                        {label: "Restaurant Analytics", key:"Ranalytics"},
                        {label: "Customer Analytics", key:"Canalytics"}
                    
                    ],
                    icon:<AreaChartOutlined />
                },
                {
                    label:"Offers",
                    key:'/Offers',
                    icon:<PercentageOutlined />
                },
                {
                    label:"Froker Analytics",
                    key:'/FrokerAnalytics',
                    icon:<LineChartOutlined />
                },
                {
                    label:"Subscription",
                    key:'/Subscription',
                    icon:<LikeOutlined /> 
                },
            ]
        }></Menu> </div>
);}

export default Sidebar;