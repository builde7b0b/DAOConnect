<template>
    <div>
      <h2>Welcome to the Social Media dashboard!</h2>
      <p>Here you can see your latest posts, followers, and engagement.</p>
  
      <h3>Latest Posts</h3>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
  
      <h3>Followers</h3>
      <ul>
        <li v-for="follower in followers" :key="follower.id">{{ follower.name }}</li>
      </ul>
  
      <h3>Engagement</h3>
      <p>Likes: {{ likes }}</p>
      <p>Comments: {{ comments }}</p>
    </div>
  </template>
  
  <script>

  
  export default {

    
    data() {
      return {
        posts: [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
          { id: 3, title: 'Post 3' },
        ],
        followers: [
          { id: 1, name: 'Follower 1' },
          { id: 2, name: 'Follower 2' },
          { id: 3, name: 'Follower 3' },
        ],
        likes: 10,
        comments: 5,
      };
    },
  };
  </script>
  