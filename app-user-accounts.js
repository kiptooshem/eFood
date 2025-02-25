(function () {
    //get the table id
    // const tBody = document.getElementById('tBody');
    const table = document.getElementById('table');
    var userID = document.getElementById('key').value;
    //get the firebase reference
    const dbRefObject = firebase.database().ref().child('users');

    //sync object changes using the on method
    dbRefObject.on('value', function (snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            // ...
            /*console.log(childKey);*/
            console.log(childData);
            if (childKey == userID)
            {
                /*create a table row and td*/
                var tableBody = document.createElement('tbody');
                var tr = document.createElement('tr');
                tr.innerHTML = "" +
                    "<td>" + childData.name + "</td>" +
                    "<td>" + childData.address + "</td>" +
                    "<td>" + childData.phone_number + "</td>" +
                    "";
                tr.className='warning';
                tableBody.appendChild(tr);
                table.appendChild(tableBody);
                /*Disable loading button*/
                document.getElementById('visibility').style.display='none';
            }
        });
    });
}());