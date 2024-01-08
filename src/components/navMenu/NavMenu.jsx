//import

import { useNavigate } from "react-router"

//define 
const navigationItems = [
    {
        label: 'Cottage',
        route: '/aCozyCottage'
    },
    {
        label: 'Pasture',
        route: '/aFreshPasture'
    },
]

//default function
const NavMenu = () =>{ 

    //logic 

    const navigate = useNavigate();
    
    //return
    return (<div>
        This is NavMenu
        {navigationItems.map((item, index)=>
        <button key={index} onClick={() => {navigate(item.route)}}>{item.label}</button>)}

    </div>)
}

export default NavMenu