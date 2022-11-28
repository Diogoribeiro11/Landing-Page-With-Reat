import React from "react";

const Card = (props) => {

    return (
        <div className="card" style={{ border: 'none' }}>
            <div class="card" style={{ width: '13rem' }}>
                <img class="card-img-top" src="props.image" ></img>
                <div class="card-body">
                    <h5 class="card-title text-center">{props.title}</h5>
                    <p class="card-text text-center">{props.content}</p>
                    <div class="card-footer text-muted">
                        <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
