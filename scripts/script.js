//---------------------------------
// Your own functions here
//---------------------------------


function sayHello() {
    //do something
}
//sayHello();    //invoke function
function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("logging out user");
      }).catch((error) => {
        // An error happened.
      });
}