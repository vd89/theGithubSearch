const github = new GitHub();
const ui = new UI();

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e => {
    const userText = e.target.value;
    if (userText !== '') {
        // console.log(userText);
        github.getUser(userText).then(data => {
            if (data.profile.message === 'Not Found') {
                // show alert
                // console.log('user not found', 'alert alert-danger');
                ui.showAlert('User Not Found', 'alert alert-danger');
            } else {
                console.log(data.profile);
                // console.log(data.repos);
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        // clear profile
        ui.clearProfile();
    }
});
