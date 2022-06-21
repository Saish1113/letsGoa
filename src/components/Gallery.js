import React from 'react';
import { MDBGallery, MDBGalleryList} from 'react';

function Gallery() {
  const dataImg = [
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
      cols: 1,
      title: 'image',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).webp',
      cols: 2,
      title: 'image',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(71).webp',
      cols: 1,
      title: 'image',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).webp',
      cols: 2,
      title: 'image',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).webp',
      cols: 2,
      title: 'image',
    },

    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).webp',
      cols: 1,
      title: 'image',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).webp',
      cols: 2,
      title: 'image',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).webp',
      cols: 1,
      title: 'image',
    }
  ];

  return (
    <MDBGallery cols={4}>
        <h1>hello</h1>
      {dataImg.map(({ cols, img, title }, i) => {
        return (
          <MDBGalleryList
            key={i}
            cols={cols || 1}
            titleClasses='rounded'
            styles={{ boxShadow: '0 0 3px rgba(0,0,0, .3)' }}
          >
            <img src={img} alt={title} />
          </MDBGalleryList>
        );
      })}
    </MDBGallery>
  );
}

export default Gallery;