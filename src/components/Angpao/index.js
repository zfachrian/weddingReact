import React from 'react';
import WishesContainer from './WishesContainer';
// import Modal from './Modal';

function Angpao() {
  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container">
        <div className="row ">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading ">
              <h2 className="main-font">Ungkapan Bahagia</h2>
              <p>Bentuk ungkapan suka cita dari para undangan</p>
             
              {/* <Modal /> */}
              <WishesContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Angpao;
