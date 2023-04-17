import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';
import { Avatar } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import testimonials from '../../Data/Testimonials.js';

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: 'gray', fontSize: '45px' }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: 'gray', fontSize: '45px' }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
    >
      <div style={{ width: '60%', textAlign: 'center' }}>
        <h2>What my costumers say</h2>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          {/* <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg"
          />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
          />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
          /> */}
          {testimonials.map((testimonial) => {
            return (
              <Card
                quote={testimonial.quote}
                author={testimonial.author}
                category={testimonial.category}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img, author, quote, category }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'gray',
      }}
    >
      <>
        {/* <Avatar
          imgProps={{ style: { borderRadius: '50%' } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: '1px solid lightgray',
            padding: 7,
            marginBottom: 20,
          }}
        /> */}
        <h3>{quote}</h3>
        <p style={{ fontStyle: 'italic', marginTop: 15 }}>
          <span style={{ fontWeight: 500, color: 'purple' }}>{author}</span>
        </p>
        <p>{category}</p>
      </>
    </div>
  );
};

export default Testimonial;
