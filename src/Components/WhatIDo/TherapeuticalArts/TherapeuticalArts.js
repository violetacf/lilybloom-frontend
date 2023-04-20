import Lottie from 'lottie-react';
import underConstruction from './../../../Images/UnderConstruction.json';
import './../WhatIDo.css';

export default function TherapeuticalArts() {
  return (
    <div>
      <h1>Therapeutic Arts</h1>
      <p>
        Lorem ipsum dolor sit amet. Et expedita natus aut perspiciatis illum rem
        eius ipsam. Et autem obcaecati est corporis cupiditate ut nostrum itaque
        eos quibusdam illum est autem voluptatem aut voluptatem obcaecati ut
        minima facilis. Id eaque ducimus ut soluta laborum et ratione Quis rem
        laborum sapiente sed eligendi reiciendis et culpa voluptatem? Est unde
        praesentium est dolor eaque ab inventore fugiat. Non suscipit iure aut
        dolorem distinctio ab vitae deserunt rem harum quia. Vel ipsa architecto
        aut harum nisi est Quis voluptates qui consequatur aliquam et suscipit
        cumque vel incidunt nostrum aut debitis enim. Aut dicta nulla et
        aspernatur quibusdam eum minima vero ut fugiat cupiditate aut reiciendis
        corporis sed impedit ratione 33 nisi dolor!
      </p>
      <Lottie
        aria-label="under construction animation"
        className="under-construction"
        animationData={underConstruction}
      />
      <a href="/whatIDo">
        {' '}
        <button className="navbar-button"> Back To What I Do </button>
      </a>
    </div>
  );
}
