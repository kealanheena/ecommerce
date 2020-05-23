import React from 'react';

import axios from 'axios';

// This is just some code to test that we can get data from the API
axios.get('/api', {
  params: {
    ID: 12345
  }
})
.then((response) => {
  console.log(response.data);
})

function Home() {
  return (
    <div className="homePage">
      <h1>Testing changes</h1>
    </div>
  );
}

export default Home;
