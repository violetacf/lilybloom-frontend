import './Gallery.css';
import posts from '../../Data/Posts.js';
import GalleryItem from './GalleryItem';

export default function Gallery() {
  return (
    <div className="gallery-container">
    <div>
        {posts.map((post) => {
          return <GalleryItem title={post.title}
          image={post.image} content={post.content} />;
        })}
      </div>
    </div>
  );
}
