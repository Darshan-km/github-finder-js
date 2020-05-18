let getGit = new Github;
let ui = new UI;

//Search user 
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
const searchValue = e.target.value;
if(searchValue.length !== 0 || searchValue !== null || searchUser !== undefined){
  getGit.getUser(searchValue)
  .then((data) => {
    if(data.profile.message === "Not Found"){
      //show not found alert
      ui.showAlert('This user doest not exist', 'alert alert-danger');
    }else{
    //show data
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
    }
  })
}else{
  ui.clearProfile();
}
});