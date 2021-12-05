import React, { useState } from 'react';
import WishesContainer from './WishesContainer';

function Angpao() {
  const [showResult, setShowResult] = useState(false);
  const renderResult = () => {
    if (!showResult){
      return (
        <button type="submit" class="btn btn-primary btn-lg" onClick={() => setShowResult(true)}>
          Kirim Hadiah
        </button>
      );
    }else{ 
        return (
          <div className="col-md-4 col-md-offset-4">
            <button type="submit" class="btn btn-primary btn-lg" onClick={() => setShowResult(false)}>
              Tutup
            </button>
            <br></br>
            <div>
            <WishesContainer />
            </div>
          </div>
        );
      }

  }
  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container">
        <div className="row ">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading ">
              <h2 className="main-font">Ungkapan Bahagia</h2>
              <p>Bentuk ungkapan suka cita dari para undangan</p>
             
              <div className="row">{renderResult()}</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Angpao;
