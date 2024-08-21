//AJAX needst to be implemented

function selectRobot(robot) {
    robot.classList.toggle("selected")
}

function displayRobot(robot) {

}

//addRobot function
document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById("addButton");
    const robotForm = document.getElementById("robot-form");
    const saveButton = document.getElementById("saveButton");
    const exitButton = document.getElementById("exitButton");

    addButton.addEventListener('click', () => {
        // Function to open the Robot Form popup
        robotForm.style.display = 'block';
        robotForm.style.top = '50%';
        robotForm.style.left = '50%';
        robotForm.style.display = 'trasnlate(-50%, -50%)';
    });

    saveButton.addEventListener('click', () => {
        const robot_name = document.getElementById("robot-name").value;
        const robot_type = document.getElementById("robot-type").value;
        const robot_power = document.getElementById("robot-power").value;
    })

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").style.display = 'block';
        }
    }

    // Open POST request to the server-side PHP script
    xhttp.open('POST', 'database.php', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    // Send the form data to the server
    xhttp.send('name=' + encodeURIComponent(robot_name) + 'type' + encodeURIComponent(robot_type) + 'power' + encodeURIComponent(robot_power));



    exitButton.addEventListener('click', () => {
        // Function to close the Robot Form popup
        robotForm.style.display = 'none';
    })

    /*
   // Make the popup draggable
   let isDragging = false;
   let offsetX, offsetY;

   robotForm.addEventListener('mousedown', (e) => {
       isDragging = true;
       offsetX = e.clientX - robotForm.offsetLeft;
       offsetY = e.clientY - robotForm.offsetTop;
       robotForm.style.cursor = 'grabbing';
   }
   );

   document.addEventListener('mousemove', (e) => {
       if (isDragging) {
           robotForm.style.left = '${e.clientX - offsetX}px';
           robotForm.style.top = '${e.clientY - offsetY}px';
       }
   });

   document.addEventListener('mouseup', () => {
       isDragging = false;
       robotForm.style.cursor = 'move';
   })
   */
}
)

//startFight function
document.addEventListener('DOMContentLoaded', function () {
    const selectedRobots = document.querySelectorAll(".selected")
    const fightInfo = "You have to select exactly two (2) robots to start a fight."

    if (selectedRobots.length == 2) {

    }
    else {
    }

    const startButton = document.getElementById("startButton");
    const robotArena = document.getElementById("robot-arena");
    const endButton = document.getElementById("endButton");

    startButton.addEventListener('click', () => {
        // Function to open the Robot Form popup
        robotArena.style.display = 'block';
        robotArena.style.top = '50%';
        robotArena.style.left = '50%';
        robotArena.style.display = 'trasnlate(-50%, -50%)';
    });

    endButton.addEventListener('click', () => {
        // Function to close the Robot Form popup
        robotArena.style.display = 'none';
    })

    /*
    // Make the popup draggable
    let isDragging = false;
    let offsetX, offsetY;
 
    robotArena.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - robotForm.offsetLeft;
        offsetY = e.clientY - robotForm.offsetTop;
        robotArena.style.cursor = 'grabbing';
    }
    );
 
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            robotArena.style.left = '${e.clientX - offsetX}px';
            robotArena.style.top = '${e.clientY - offsetY}px';
        }
    });
 
    document.addEventListener('mouseup', () => {
        isDragging = false;
        robotArena.style.cursor = 'move';
    })
}
*/
})

/*
document.getElementById('robot-form').addEventListener('submit', function (event) {
    event.preventDefault();
 
    const formData = new FormData(this);
 
    fetch('database.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerHTML = data;
        })
        .catch(error => console.error('Error: ', error));
});
*/

//removeRobot function
document.addEventListener('DOMContentLoaded', function () {
    const selectedRobots = document.querySelectorAll(".selected")
    const editInfo = "Are you sure you want to delete the selected robots?"

    const removeButton = document.getElementById("removeButton");
    const editButton = document.getElementById("editButton");

    addButton.addEventListener.removeButton(click())
})

//editRobot function
document.addEventListener('DOMContentLoaded', function () {
    const selectedRobots = document.querySelectorAll(".selected")
    const editInfo = "You have to select only one (1) robot to edit one."

    if (selectedRobots.length != 1) {

    }
    else {

    }
})