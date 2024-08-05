import React from 'react';

function ComicItem({ comic }) {
  return (
    <div className="comic-item">
      <img src={comic.image_url} alt={comic.title} />
      <h3>{comic.title}</h3>
      <p>作者: {comic.author}</p>
      <p>発売日: {comic.release_date}</p>
    </div>
  );
}

export default ComicItem;