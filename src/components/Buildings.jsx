import React from 'react';

import Building from './Building'

class Buildings extends React.Component{
    state = {
        buildings: [
            {
                id: 1,
                price: 15,
                numberofBuildings: 0,
                cookiesPerSec: 1,
            },
            {
                id: 2,
                price: 150,
                numberofBuildings: 0,
                cookiesPerSec: 4,
            },
            {
                id: 3,
                price: 500,
                numberofBuildings: 0,
                cookiesPerSec: 10,
            },
            {
                id: 4,
                price: 1000,
                numberofBuildings: 0,
                cookiesPerSec: 20,
            },
            {
                id: 5,
                price: 2000,
                numberofBuildings: 0,
                cookiesPerSec: 45,
            },
            
        ],
       
    }

    handleClick = (id) => {
        let buildings = [...this.state.buildings];
        const index = buildings.findIndex(building => building.id === id);

        
            if(this.props.getCount >= buildings[index].price){
                this.props.onUpdateCookies(-buildings[index].price)
                this.props.onUpdatePerSec(buildings[index].cookiesPerSec);
                buildings[index].price = Math.floor(buildings[index].price *1.1);
                buildings[index].numberofBuildings++; 
                this.setState({buildings})
        }
        
    }
    render(){
        return (
            <>
                {this.state.buildings.map(building => (
                    <Building
                    key={building.id}
                    details={building}
                    onUpdateBuilding = {this.handleClick}
                    />
                   
                ))}
           </>
        )
   
    }
}

export default Buildings;