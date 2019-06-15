//console.log(firebase)

var database = firebase.database();

function send(){
    var inputBox = document.getElementById('InputBox');
    var msg = inputBox.value;
    database.ref('messages').push().set({
        body : msg,
        author : 'auth'
    });
    inputBox.value = '';

}

var chatBox = document.getElementById('chatBox');
database.ref('messages').on('child_added', function(snapshot){
    var msg = snapshot.val();
    chatBox.innerHTML += `<p>${msg.body} - by ${msg.author}</p>`;
});





// function writeUserData(name, age){
//     database.ref('users').push().set({
//         username: name,
//         age: age,
//     });
// }

// database.ref('users').on('child_added', function(snapshot){
//     console.log(snapshot.val());
// });
