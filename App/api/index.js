
const fetchUserRepos = async username => {
  if (!username) {
    throw new Error('No username supplied');
  }

  const url = `https://api.github.com/users/${username}/repos`;
  const data = await fetch(url).then(res => res.json());
  
  return data;
};


const fetchUserBio = async (username) => {
  if (!username) {
    throw new Error('No username supplied');
  }
  // username = username.toLowerCase().trim();
  const  url = `https://api.github.com/users/${username}`;
  const data = await fetch(url).then(res => res.json());

  return data;
};

export { fetchUserRepos, fetchUserBio };
