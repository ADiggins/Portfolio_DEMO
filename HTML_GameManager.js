console.log("GameManager connected");

// //Version #1
// function loadNewGame(name) {
//     // location.reload();
//     let oldScript = document.getElementById("gameScript");
//     // console.dir(oldScript);
//     if (oldScript != null)
//         document.head.removeChild(oldScript);
    
//     const newScript = document.createElement('script');
//     newScript.id= "gameScript";
//     newScript.src = name;
//     document.head.appendChild(newScript);
    
// }
// loadNewGame('Pong.js');

const newScript = document.createElement('script');
newScript.id= "gameScript";
newScript.src = localStorage.getItem("loadedGame");
document.head.appendChild(newScript);

function loadNewGame(name) {
    localStorage.setItem("loadedGame", name);
    location.reload();
}

