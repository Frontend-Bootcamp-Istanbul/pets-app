import React from 'react';
import {Pet} from "../components";
import {getPets} from "../constants";


class PetList extends React.Component{
    breed;
    constructor(props){
        super(props);
        this.state = {
            _pets: [],
            pets: [],
            yukleniyor: true
        }
    }

    componentDidMount() {
        getPets().then((data) => {
            this.setState({
                _pets: data,
                pets: data,
                yukleniyor: false
            })
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.activeFilter !== this.props.activeFilter){
            this.filterPets(this.props.activeFilter);
        }
    }

    filterPets = (activeFilter) => {
        this.setState({
            pets: this.state._pets.filter((pet) => {
                return pet.breed === activeFilter;
            })
        })
    }


    render(){
        return (
            <div>
                {
                    this.state.yukleniyor ? <div>Yukleniyor</div> : <div className="row">
                        {
                            this.state.pets.map((pet) => {
                                return <Pet key={Math.random()} {...pet} />
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}


export default PetList;
