import React from 'react';
import {Filters} from "../components";

function Sidebar(props) {
    return (
        <div>
            <Filters
                onFilterPets={props.onFilterPets}
                activeFilter={props.activeFilter}
            />
        </div>
    );
}

export default Sidebar;
