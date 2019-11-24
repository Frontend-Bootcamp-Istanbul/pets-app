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
        if(!activeFilter){
            this.setState({
                pets: this.state._pets
            })
        }else{
            this.setState({
                pets: this.state._pets.filter((pet) => {
                    return pet.breed === activeFilter;
                })
            })
        }
    }


    render(){
        const Yukleniyor = <div>Yukleniyor</div>;
        const EmptyPets = <div>Bulunamadı</div>;
        const Pets = <div className="row">
            {
                this.state.pets.map((pet) => {
                    return <Pet key={Math.random()} {...pet} />
                })
            }
        </div>;
        if(this.state.yukleniyor){
            return Yukleniyor;
        }else if(this.state.pets.length === 0){
            return EmptyPets
        }else{
            return Pets;
        }
    }
}


export default PetList;
