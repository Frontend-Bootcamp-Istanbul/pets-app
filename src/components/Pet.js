import React from 'react';


function Pet(props) {
    const {name, image, age, description, breed} = props;
    return (
        <div className="col-lg-6 col-md-4 mb-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src={image} alt="" style={{height: "292px"}}/></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{name}</a>
                        <div>
                            <span className="badge badge-primary" style={{fontSize: "12px"}}>{breed}</span>
                        </div>
                        <div>
                            <span className="badge badge-warning" style={{fontSize: "12px"}}>{age}</span>
                        </div>
                    </h4>
                    <p className="card-text">
                        {description}
                    </p>
                </div>
                <div className="card-footer">
                    <div className="btn btn-success">Favorilere Ekle</div>
                </div>
            </div>
        </div>
    );
}

export default Pet;
