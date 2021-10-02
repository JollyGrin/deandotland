import React, { Component } from 'react';
import Layout from '../components/Layout';
import { getVideos } from '../assets/js/youtube'
import Container from '../components/Container';
import InstaComponent from '../components/InstaComponent';
import { getPosts } from '../assets/js/insta';


export default function Index({ result, preview }) {
  return (
    <Layout>
      <div className="page">
      <section>
        <h1>dean.land leds</h1>
        <p>low effort derivatives and memes</p>
      </section>

      <section>
      <div className="icons">
          <a href="https://opensea.io/collection/deanland-leds"><span>opensea</span></a>
        </div>
      </section>
     
      <section className="footer">
        <p> Created by <a href="https://dean.lol">Dean Masley</a>, </p>
        <p> <a href="https://www.instagram.com/deandotland/">@deandotland </a> (on instagram) creates 3d animations. </p>
        <p> Just goofing with blender. </p>
      </section>
      </div>
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