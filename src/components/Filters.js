import React from 'react';
import {breedOptions} from "../constants";

function Filters(props) {
    return (
        <div>
            <h4 className="my-4 text-left">Cins</h4>
            <ul>
                <li className="list-group-item">Hepsi</li>
                {
                    breedOptions.map((breed) => {
                        return <li
                            className="list-group-item"
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
