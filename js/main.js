
document.getElementById('submit').addEventListener('click', submit)
document.getElementById('secondButton').addEventListener('click', submit)

var myHeaders = new Headers();
myHeaders.append("X-Api-key", "BAqSh4c2MJU/zMz0/AuESg==3Qodr0PhBtQFctjp");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

function submit(){
    document.getElementById('load').style.visibility = 'visible'
    document.getElementById('firstDisplay').style.display = 'none'
    fetch("https://api.api-ninjas.com/v1/bucketlist", requestOptions)
    .then(response => response.json())
    .then(data => {
        
        document.getElementById('load').style.visibility = 'hidden'
        document.getElementById('placeIdeas').innerHTML = data.item
        document.getElementById('section').style.display = 'flex'
    })
}