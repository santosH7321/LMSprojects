function Crousel(){
    return(


<div className="carousel w-full m-10 ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/18dc1591a016958b.jpg?q=20" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0ded2a768b23a1a3.jpg?q=20" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/images/shttps://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0fefa895b0c447bb.png?q=20tock/photo-14146947622https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f9c2b82608c2f227.jpeg?q=2083-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fhttps://rukminim1.flixcart.com/fk-p-flap/1600/270/image/98b44a3628440823.jpg?q=20b8e5d1707https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b9750511662dc189.jpg?q=20.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

)
}

export default Crousel;