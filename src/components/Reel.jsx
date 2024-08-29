import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from "../components/index";
import Usequery from './Usequery';
import { Helmet } from 'react-helmet';

const Reel = () => {
  const username = useSelector(state => state.data);
  const user = username?.data?.data?.username;
  const { post, error, loading } = Usequery(`https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${user}`);

  const items = post?.data?.items;

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

  return (
    <>
      <Helmet>
        <title>{user ? `${user}'s Instagram Reels` : 'Instagram Reels'}</title>
        <meta name="description" content={`Watch Instagram reels from ${user}. Enjoy videos from your favorite Instagram profiles.`} />
        <meta name="keywords" content={`Instagram Reels, ${user}, watch Instagram reels, Instagram videos, anonymous Instagram viewer`} />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content={`${user ? `${user}'s Instagram Reels` : 'Instagram Reels'}`} />
        <meta property="og:description" content={`Watch Instagram reels from ${user}. Enjoy videos from Instagram profiles anonymously.`} />
       <meta property="og:type" content="website" />
      </Helmet>
      <div className='w-full'>
        {user && post && post.data && post.data.items ? (
          <div className='grid grid-cols-1 md:grid-cols-4 m-2 gap-6 text-center'>
            {items.map(item => (
              <div key={item.id}>
                <div className='flex'>
                  <video src={item.video_url} controls className='border border-gray-950'></video>
                  <br />
                </div>
                <a href={item.video_url} target='_blank' rel="noopener noreferrer" download="true">
                  <Button className='m-2'>View</Button>
                </a>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Reel;
