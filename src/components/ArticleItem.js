import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleItem.css';

function ArticleItem(props) {
  return (
    <>
      <li className='judul'>
        <Link className='judul__link' to={props.path}>
          <div className='judul__info'>
            <h5 className='judul__text'>{props.text}</h5>
            <h8 className='judul__penulis'>{props.text3}</h8>
          </div>
          <figure className='judul__pic-wrap'>
            <img
              className='judul__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
            <h8 className='judul__define'>{props.text2}</h8>
        </Link>
      </li>
    </>
  );
}

export default ArticleItem;
