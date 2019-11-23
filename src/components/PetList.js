import React from 'react';
import {Pet} from "../components";



class PetList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pets: [],
            yukleniyor: true
        }
    }

    componentDidMount() {
        fetch("http://5dd7af92505c590014d3b4ac.mockapi.io/pets")
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({
                    pets: data,
                    yukleniyor: false
                })
            })
            .catch((err) => {
                console.log("err");
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
