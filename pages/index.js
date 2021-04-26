import React, { Component } from 'react';
import Layout from '../components/Layout';
import { getVideos } from '../assets/js/youtube'
import Container from '../components/Container';
import InstaComponent from '../components/InstaComponent';
import { getPosts } from '../assets/js/insta';


export default function Index({ result, preview }) {
  return (
    <Layout>
      <section>
        <h1>dean.land</h1>
        <p>established Nov 24, 2020</p>
        <br />
        <div className="icons">
          <a href="https://www.instagram.com/deandotland/"><i className="fab fa-instagram" /></a>
          {/* <a href="https://www.youtube.com/playlist?list=PL1i-TpHn0Xgw8iZe2wqS4tuC9BKem0buD"><i className="fab fa-youtube" /></a> */}
          <a href="https://app.rarible.com/deandotland/onsale"><i className="fab fa-ethereum" /></a>
          <a href="https://dean.lol"><span>.lol</span></a>
        </div>
      </section>
      <div id="thegrid">
        {result.map((post, i) => (
          <InstaComponent instaobject={post} key={i} />
        ))}
      </div>
      <section>
        <p> Created by <a href="https://dean.lol">Dean Masley</a>, </p>
        <p> <a href="https://www.instagram.com/deandotland/">@deandotland </a> (on instagram) creates 3d animations. </p>
        <p> Just goofing with blender. </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  let posts = {};

  const rawResult = await getPosts();
  const result = JSON.parse(JSON.stringify(rawResult))

  return {
    props: { result }, // will be passed to the page component as props
  };
}