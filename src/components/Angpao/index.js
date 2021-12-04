import React, { useState } from 'react';
import WishesContainer from './WishesContainer';

function Angpao() {
  const [showResult, setShowResult] = useState(false);
  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container">
        <div className="row ">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading ">
              <h2 className="main-font">Ungkapan Bahagia</h2>
              <p>Bentuk ungkapan suka cita dari para undangan</p>
             
              <button type="submit" class="btn btn-primary" onClick={() => setShowResult(true)}>
                Kirim Hadiah
              </button>
              <WishesContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Angpao;
