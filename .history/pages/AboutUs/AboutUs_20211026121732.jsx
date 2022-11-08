import Main from "../Leyouts/Main";
import Head from "next/head";
import style from "./AboutUs.module.scss"
export default function AboutUs(params) {
    
    return(
        <>
        <Head>
        <link href="https://raw.githubusercontent.com/daneden/animate.css/master/animate.css" rel="stylesheet"/>

        </Head>
        <Main>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


<link href="https://raw.githubusercontent.com/daneden/animate.css/master/animate.css" rel="stylesheet"/>

<div id="myCarousel" className={`${style.} carousel slide carousel-fade`} data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="mask flex-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 col-12 order-md-1 order-2">
              <h4>Present your <br/>
                awesome product</h4>
              <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br/>
                necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
              <a href="#">BUY NOW</a> </div>
            <div className="col-md-5 col-12 order-md-2 order-1"><img src="https://i.imgur.com/NKvkfTT.png" className="mx-auto" alt="slide"/></div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="mask flex-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 col-12 order-md-1 order-2">
              <h4>Present your <br/>
                awesome product</h4>
              <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br/>
                necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
              <a href="#">BUY NOW</a> </div>
            <div className="col-md-5 col-12 order-md-2 order-1"><img src="https://i.imgur.com/duWgXRs.png" className="mx-auto" alt="slide"/></div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="mask flex-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 col-12 order-md-1 order-2">
              <h4>Present your <br/>
                awesome product</h4>
              <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br/>
                necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
              <a href="#">BUY NOW</a> </div>
            <div className="col-md-5 col-12 order-md-2 order-1"><img src="https://i.imgur.com/DGkR4OQ.png" className="mx-auto" alt="slide"/></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a> </div>

        </Main>
        </>
    );
};