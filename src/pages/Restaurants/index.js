import { Card, Space, Statistic } from "antd";
import { useState } from "react";
import './index.css';
import { Link } from "react-router-dom";

function Restaurants(){
    return (
        <div>
            <h1>Restaurants List</h1>
            <div className="restaurant-list">
            <Space direction="horizontal">
            <RestaurantList title={"Cibo Matto"}
                             orders={35}
                            Torders={105}
                            />
            </Space>
            <Space direction="horizontal">
            <RestaurantList title={"Hyderabadi Bucket Biryani "}
                             orders={27}
                            Torders={145}
                            />
            </Space>
            <Space direction="horizontal">
            <RestaurantList title={"Otto"}
                             orders={32}
                            Torders={123}
                            />
            </Space>
            </div>
           <p></p>
            <Link to="/add-restaurant">
                <button className="btn" type="primary">Add Restaurant</button>
                </Link> 

            
            </div>
    
        );
}

function RestaurantList( {title, value, orders, Torders}){
    const [expanded, setExpanded] = useState(false);
    const handleTitleClick = () => {
        setExpanded(!expanded);
      };
    return(
        
        <Card onClick={handleTitleClick} className={`restaurant-card ${expanded ? "expanded" : ""}`}>
        <Card.Meta title={title} />
        {expanded && (
          <Space direction="vertical">
            {/* <Statistic title="Value" value={value} /> */}
            <Statistic title="Orders" value={orders} />
            <Statistic title="Total Orders" value={Torders} />
          </Space>
        )}
      </Card>
    );
  }

export default Restaurants;