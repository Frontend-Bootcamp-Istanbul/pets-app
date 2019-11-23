import React from 'react';
import {Sidebar, PetList} from "../components";

function HomePage() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className="col-lg-9">
                        <PetList />
                    </div>
                </div>
                </div>
        </div>
    );
}

export default HomePage;
