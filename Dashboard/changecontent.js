
//var dashcontent = document.getElementsByClassName('dash_content_background');

function adduser_selected() {
    alert("adduser selected");
}

function updateuser_selected() {
    alert("updateuser selected");
}

function deleteuser_selected() {
    alert("deleteuser selected");
}

function settings_selected() {
    alert("settings selected");
}

function logout_selected() {
    var logoutconfirmation = confirm("are your sure to logout?");
    if(logoutconfirmation == true)
    {
        document.location = 'file:///D:/Game%20Development/ZOB_ConnectWeb/WelcomePage/index.html';
        alert("user logout");
        
    }
    else
    {
        alert("user stay");
    }
}
