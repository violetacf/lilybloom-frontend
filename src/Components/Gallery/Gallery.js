import image from './../../Images/flowers.jpg';
import './Gallery.css';

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-item">
        <div className="title-image-container">
          <h1>Lorem ipsum</h1>
          <img src={image} alt="flowers"></img>
        </div>
        <p>
          Lorem ipsum dolor sit amet. Et expedita natus aut perspiciatis illum
          rem eius ipsam. Et autem obcaecati est corporis cupiditate ut nostrum
          itaque eos quibusdam illum est autem voluptatem aut voluptatem
          obcaecati ut minima facilis. Id eaque ducimus ut soluta laborum et
          ratione Quis rem laborum sapiente sed eligendi reiciendis et culpa
          voluptatem?
        </p>
      </div>
      <div className="gallery-item">
        <div className="title-image-container">
          <h1>Lorem ipsum</h1>
          <img src={image} alt="flowers"></img>
        </div>
        <p>
          Lorem ipsum dolor sit amet. Et expedita natus aut perspiciatis illum
          rem eius ipsam. Et autem obcaecati est corporis cupiditate ut nostrum
          itaque eos quibusdam illum est autem voluptatem aut voluptatem
          obcaecati ut minima facilis. Id eaque ducimus ut soluta laborum et
          ratione Quis rem laborum sapiente sed eligendi reiciendis et culpa
          voluptatem?
        </p>
      </div>
      <div className="gallery-item">
        <div className="title-image-container">
          <h1>Lorem ipsum</h1>
          <img src={image} alt="flowers"></img>
        </div>
        <p>
          Lorem ipsum dolor sit amet. Et expedita natus aut perspiciatis illum
          rem eius ipsam. Et autem obcaecati est corporis cupiditate ut nostrum
          itaque eos quibusdam illum est autem voluptatem aut voluptatem
          obcaecati ut minima facilis. Id eaque ducimus ut soluta laborum et
          ratione Quis rem laborum sapiente sed eligendi reiciendis et culpa
          voluptatem?
        </p>
      </div>
    </div>
  );
}
