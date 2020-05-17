// // Init Github
// const github = new Github;
// // Init UI
// const ui = new UI;

// // Search input
// const searchUser = document.getElementById('searchUser');

// // Search input event listener
// searchUser.addEventListener('keyup', (e) => {
//   // Get input text
//   const userText = e.target.value;

//   if(userText !== ''){
//    // Make http call
//    github.getUser(userText)
//     .then(data => {
//       if(data.profile.message === 'Not Found') {
//         // Show alert
//         ui.showAlert('User not found', 'alert alert-danger');
//       } else {
//         // Show profile
//         ui.showProfile(data.profile);
//         ui.showRepos(data.repos);
//       }
//     })
//   } else {
//     // Clear profile
//     ui.clearProfile();
//   }
// }); 

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
    if(data.profile.message === 'Not Found'){
      //show not found alert
    }else{
    //show data
      ui.showProfile(data.profile);
    }
  })
}
});