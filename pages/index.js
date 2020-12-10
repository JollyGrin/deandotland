import React, { Component } from 'react';
import Layout from '../components/Layout';

export default function Index({ data, preview }) {
  return (
    <Layout>
      <section>
          <h1>Dean Land</h1>
          <p>established Nov 24, 2020</p>
          <br />
          <div className="icons">
              <a href="https://www.instagram.com/deandotland/"><i className="fab fa-instagram" /></a>
              <a href="https://www.youtube.com/playlist?list=PL1i-TpHn0Xgw8iZe2wqS4tuC9BKem0buD"><i className="fab fa-youtube" /></a>
              <a href="https://dean.lol"><span>.lol</span></a>
          </div>
          <p> Created by Dean Masley, </p>
          <p> @deandotland (on instagram) creates free 3d animations. </p>
          <p> Take whatever you want, I'm just learning blender.</p>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  let data = {};

  return {
    props: { data }, // will be passed to the page component as props
  };
}
