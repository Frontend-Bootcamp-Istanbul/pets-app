import React from 'react';
import {Sidebar, PetList} from "../components";


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeFilter: ""
        }
    }

    componentDidMount() {
        document.title = "Home Page";
    }

    componentWillUnmount() {
        document.title = "Pets App";
    }

    filterPets = (breed) => {
        this.setState({
            activeFilter: breed
        });
    }

    render(){
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar
                                onFilterPets={this.filterPets}
                                activeFilter={this.state.activeFilter}
                            />
                        </div>
                        <div className="col-lg-9">
                            <PetList activeFilter={this.state.activeFilter} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
