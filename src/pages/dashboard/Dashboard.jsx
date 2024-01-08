//imports

import { Outlet } from "react-router"

import { EventLog, Inventory, NavMenu } from "../../components"
const Dashboard = () =>{

    return (
        <div className="dashboardWrapper">
            <h1>This is Dashboard</h1> 
            <NavMenu/>
            <Outlet/>
            <EventLog/>
            <Inventory/>
        </div>
    )
        
}

export default Dashboard