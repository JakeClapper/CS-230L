import React from "react";

const Card = () => {
  return (
    <>
      <div className="d-flex justify-content-around text-center w-400">
        <div
          className="card text-white bg-primary mb-3 text-center custom-width"
           styles={{maxWidth: '18rem'}}
        >
          <div className="card-header">
            <h4>Card 01</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              Some quixk example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card text-white bg-danger mb-3" style="max-width: 18rem">
          <div className="card-header">
            <h4>Card 03</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              Some quixk example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card text-white bg-success mb-3" style="max-width: 18rem">
          <div className="card-header">
            <h4>Card 02</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              Some quixk example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
