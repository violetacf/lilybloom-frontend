import { Carousel } from 'react-carousel-minimal';
import testimonials from '../../Data/Testimonials';
import './Testimonials.css';

function CarouselTestimonials() {
  const captionStyle = {
    fontSize: '15pt',
  };

  return (
    <div className="testimonials-container">
      <div style={{ textAlign: 'center' }}>
        <p>What my clients say about me</p>
        <div className="testimonial-container">
          <Carousel
            data={testimonials}
            time={3000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '500px',
              margin: '40px auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselTestimonials;
