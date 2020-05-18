class Github{
  constructor(){
    this.client_id = 'e7bd26e6dc61d0ffa73b';
    this.client_secret = 'a7573d420c8157fbddead675648d200295a4e8a2';
    this.repoCount = 10;
    this.sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repoCount}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {profile, repos};
  }
}