var posts=["2024/10/10/外场/","2024/10/09/前言/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };