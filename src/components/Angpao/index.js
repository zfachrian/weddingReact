import React, { useState } from 'react';
import { styWrapperItem} from './styles';
import QRimg from '@assets/images/qrimg.jpg';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Angpao() {
  const [copiedStatus, setCopiedStatus] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const renderResult = () => {
    if (!showResult){
      return (
        <button type="submit" class="btn btn-primary btn-lg" onClick={() => setShowResult(true)}>
          Kirim Hadiah
        </button>
      );
    }else if(showResult && copiedStatus){
      return (
        <div className="col-md-4 col-md-offset-4">
          <button type="submit" class="btn btn-primary btn-lg" onClick={() => setShowResult(false)}>
            Tutup
          </button>
          <br></br>
          <div>
            <div className="item" css={styWrapperItem}>
              <div className={`testimony-slide text-center`}>
                <br></br>
                <div class="text-center col-m-4">
                  <img src={QRimg} alt="user" class="img-responsive center-block rounded" />
                </div>
                <div>
                  <h1></h1>
                </div>
                <h4>BCA - 8905413747</h4>
                <span className="infoName">an. Azka Gilang Rifardi</span>
                <br></br>
                <CopyToClipboard text="8905413747!" >
                  <button class="btn btn-secondary" onClick={() => setCopiedStatus(false)}>Copy</button>
                </CopyToClipboard>
                <br></br>
                <span style={{color: 'red'}}>Copied.</span>
              </div>
            </div>
          </div>
        </div>
      );
    }else{ 
        return (
          <div className="col-md-4 col-md-offset-4">
            <button type="submit" class="btn btn-primary btn-lg" onClick={() => setShowResult(false)}>
              Tutup
            </button>
            <br></br>
            <div>
              <div className="item" css={styWrapperItem}>
                <div className={`testimony-slide text-center`}>
                  <br></br>
                  <div class="text-center col-m-4">
                    <img src={QRimg} alt="user" class="img-responsive center-block rounded" />
                  </div>
                  <div>
                    <h1></h1>
                  </div>
                  <h4>BCA - 8905413747</h4>
                  <span className="infoName">an. Azka Gilang Rifardi</span>
                  <br></br>
                  <CopyToClipboard text="8905413747!" >
                    <button class="btn btn-secondary" onClick={() => setCopiedStatus(true)}>Copy</button>
                  </CopyToClipboard>
                </div>
              </div>
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
