import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Conf from '../conf/conf';
import { useCallback } from 'react';
import Button from './Button';
import { setpost } from '../store/authslice';
import Usequery from './Usequery';
import { Helmet } from 'react-helmet';

const Post = () => {
  const username = useSelector(state => state.data);
  const user = username?.data?.data?.username;
  const { post, loading, error } = Usequery(`https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${user}&url_embed_safe=true`);

  if (loading) {
    if (user) {
      return <div>Loading...</div>;
    }
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (post?.data?.items.length === 0) {
    return <div>No stories</div>;
  }

  const renderMedia = (item, index) => {
    if (item.carousel_media) {
      return (
        <div>
          <Carousel showThumbs={false} thumbWidth={'400px'} showIndicators={false} showStatus={false} className='w-[350px] flex justify-center border-white'>
            {item.carousel_media.map((carouselItem, carouselIndex) => (
              <div key={carouselIndex}>
                <img src={carouselItem.thumbnail_url} alt='image' className='mt-4 h-[400px] w-[350px] border text-center' />
                <a href={carouselItem.thumbnail_url} target='_blank' rel="noopener noreferrer"><Button className='m-2'>View</Button></a>
              </div>
            ))}
          </Carousel>
        </div>
      );
    }
    if (item.media_name === 'album_item') {
      return (
        <div>
          <img src={item.thumbnail_url} alt={`album-item-${index}`} className='mt-2 border border-white' />
          <div className='flex'>
            <a href={item.thumbnail_url} target='_blank' rel="noopener noreferrer"><Button className='m-2'>View</Button></a>
          </div>
        </div>
      );
    }
    if (item.media_name === 'post') {
      return (
        <div>
          <img src={item.thumbnail_url} alt={`post-item-${index}`} className='h-[400px] w-[350px] mt-2 border border-white' />
          <a href={item.thumbnail_url} target='_blank' rel="noopener noreferrer"><Button className='m-2'>View</Button></a>
        </div>
      );
    }
    if (item.is_video) {
      return (
        <div>
          <video src={item.video_url} controls className='h-[400px] w-[350px] mt-2 border border-white'></video>
          <div>
            <a href={item.video_url} target='_blank' rel="noopener noreferrer"><Button className='m-2'>View</Button></a>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>{user ? `${user}'s Instagram Media` : 'Instagram Media'}</title>
        <meta name="description" content={`Browse and view Instagram media from ${user} anonymously. Explore photos, videos, and more.`} />
        <meta name="keywords" content={`Instagram, anonymous viewer, ${user}, Instagram media, view Instagram anonymously`} />
        <meta property="og:title" content={`${user ? `${user}'s Instagram Media` : 'Instagram Media'}`} />
        <meta property="og:description" content={`Browse and view Instagram media from ${user} anonymously. Explore photos, videos, and more.`} />
        <meta property="og:type" content="website" />
        {/* Add a relevant image URL here */}
       
      </Helmet>
      {user && post?.data ? (
        <div className="grid grid-cols-1 md:grid-cols-4">
          {post.data.items.map((item, index) => (
            <div key={index} className="flex justify-center">
              {renderMedia(item, index)}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Post;
