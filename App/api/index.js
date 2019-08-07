const fetchUserRepos = async username => {
  if (!username) {
    throw new Error('No user name supplied');
  }

  const url = `https://api.github.com/users/${username}/repos`;
  const data = await fetch(url).then(res => res.json());

  return data;
};

export { fetchUserRepos };
