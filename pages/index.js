import React, { Component } from 'react';
import Layout from '../components/Layout';
import { getVideos } from '../assets/js/youtube'
import Container from '../components/Container';

export default function Index({ youtube, preview }) {
  return (
    <Layout>
      <section>
        <h1>dean.land</h1>
        <p>established Nov 24, 2020</p>
        <br />
        <div className="icons">
          <a href="https://www.instagram.com/deandotland/"><i className="fab fa-instagram" /></a>
          <a href="https://www.youtube.com/playlist?list=PL1i-TpHn0Xgw8iZe2wqS4tuC9BKem0buD"><i className="fab fa-youtube" /></a>
          <a href="https://dean.lol"><span>.lol</span></a>
        </div>
        </section>
        <div id="gallery">
          { youtube.map((video, i) => (
            <Container key={i} vid={video} />
          ))}
        </div>
        <section>
        <p> Created by Dean Masley, </p>
        <p> @deandotland (on instagram) creates 3d animations. </p>
        <p> Just goofing with blender. </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  let youtube = {};
  const result = await getVideos();
  youtube = result.data.items;

  return {
    props: { youtube }, // will be passed to the page component as props
  };
}