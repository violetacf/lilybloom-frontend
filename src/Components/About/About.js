import Testimonials from '../Testimonials/Testimonials.js';
import PictureLil from '../../Images/PicturesDisplayed/pictureLil.JPG';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="image-intro-container">
        <div className="image-container">
          <img
            src={PictureLil}
            alt="Lilian with a fabric painting background"
          ></img>
        </div>
        <div className="intro-text-container">
          <p>
            <p>
              Lorem ipsum dolor sit amet. Et expedita natus aut perspiciatis
              illum rem eius ipsam. Et autem obcaecati est corporis cupiditate
              ut nostrum itaque eos quibusdam illum est autem voluptatem aut
              voluptatem obcaecati ut minima facilis. Id eaque ducimus ut soluta
              laborum et ratione Quis rem laborum sapiente sed eligendi
              reiciendis et culpa voluptatem?{' '}
            </p>
            <p>
              Est unde praesentium est dolor eaque ab inventore fugiat. Non
              suscipit iure aut dolorem distinctio ab vitae deserunt rem harum
              quia. Vel ipsa architecto aut harum nisi est Quis voluptates qui
              consequatur aliquam et suscipit cumque vel incidunt nostrum aut
              debitis enim. Aut dicta nulla et aspernatur quibusdam eum minima
              vero ut fugiat cupiditate aut reiciendis corporis sed impedit
              ratione 33 nisi dolor!{' '}
            </p>
            <p>
              Et rerum blanditiis et totam iure eos excepturi omnis qui
              praesentium perspiciatis a sunt ratione At consectetur quibusdam.
              Ut architecto architecto non culpa mollitia qui architecto ullam?
              Eum fugit vero nam molestiae illo est voluptatem natus.{' '}
            </p>
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}
