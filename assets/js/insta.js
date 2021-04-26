import fetch from 'axios';
import InstaObject from './InstaObject';

// const key = process.env.APIKEY;
// const playlist = process.env.PLAYLIST;
// const maxResults = 10;

const apiURL = `https://www.instagram.com/deandotland/channel/?__a=1`;

export const getPosts = async () => {
  const result = await fetch.get(apiURL);
  const rawFeed = result.data?.graphql?.user?.edge_owner_to_timeline_media?.edges;

  let feed = [];

  await rawFeed.forEach(node => {
      feed.push(new InstaObject(node.node))
  })

  return feed;
};
