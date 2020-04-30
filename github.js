class GitHub {
    constructor() {
        this.client_id = 'c5868f39180303a9e8e4';
        this.client_secret = '32735d5e618c1fc35ce25bcc7c44b0472f590a7c';
        this.repos_count = 5;
        this.repos_sort = 'created : asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${
            this.client_id
            }&client_secret=${this.client_secret}`,
        );
        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${
            this.repos_count
            }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
            this.client_secret
            }`
        );
        const profile = await profileResponse.json()
        const repos = await repoResponse.json()
        return {
            profile,
            repos
        }
    }
}
