import './Gallery.css';

export default function GalleryItem(props) {
  return (
    <div className="gallery-item" key={props.title}>
      <div className="title-image-container">
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.category} />
      </div>
      <p>{props.content}</p>
    </div>
  );
}
