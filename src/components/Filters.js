import React from 'react';
import {breedOptions} from "../constants";

function Filters(props) {
    console.log(props.activeFilter);
    return (
        <div>
            <h4 className="my-4 text-left">Cins</h4>
            <ul>
                <li className="list-group-item" onClick={() => {
                    props.onFilterPets("");
                }}>Hepsi</li>
                {
                    breedOptions.map((breed) => {
                        let liClass = "list-group-item";
                        if(breed === props.activeFilter){
                            liClass += " active";
                        }
                        return <li
                            key={breed}
                            className={liClass}
                            onClick={(e) => {
                                e.preventDefault();
                                props.onFilterPets(breed);
                            }}>{breed}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Filters;
