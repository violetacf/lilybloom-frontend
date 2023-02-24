import './Created.css';
import Leaves from '../../Images/Leaves2.png';

export default function CreatedBy() {
  return (
    <div className="created-container">
      <img className="left-leaf leaves" src={Leaves} alt="leaves"></img>
      <p>
        Designed & Developed by
        <a href="https://violeta.cique.es/">Violeta Cique</a>- 2023
      </p>
      <img className="right-leaf leaves" src={Leaves} alt="leaves"></img>
    </div>
  );
}
