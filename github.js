class GitHub {
  constructor() {
    this.repos_count = 6;
    this.repos_sort = "created : asc";
  }
  async getUser(user) {
    const profileResponse = await axios
      .get(`https://api.github.com/users/${user}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
    const repoResponse = await axios
      .get(
        `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
    const profile = profileResponse;
    const repos = repoResponse;
    return {
      profile,
      repos,
    };
  }
}
