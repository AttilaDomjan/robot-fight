<?php
include "database.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Robot Fight</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <link rel="shortcut icon" href="images/istockphoto-683391962-2048x2048.jpg" type="image/x-icon">
</head>

<body>
    <h1>Welcome to the Robot Fight</h1>

    <div id="main-container">
        <div class="container" id="left-container">
            <h3 class="robot-name" id="right-robot-name"></h3>
            <div class="image-container">
                <img src="" alt="robot-fighter">
            </div>
            <div class="stats-container">

            </div>
        </div>


        <div class="container" id="center-container">
            <table id="table-wrapper">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Power</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if (! $sql_result) {
                        die("Invalid query: ");
                    }

                    while ($row = $sql_result->fetch_assoc()) {
                        echo "       <tr id='row-{$row['id']}'
                        onclick=selectRobot(document.getElementById('row-{$row['id']}'))>
                                            <td>" . $row["id"] . "</td>
                                            <td>" . $row["name"] . "</td>
                                            <td>" . $row["type"] . "</td>
                                            <td>" . $row["power"] . "</td>
                                        </tr>
                            ";
                    }
                    ?>
                </tbody>
            </table>
            <div class="button-container">
                <button id="addButton">
                    Add</button>
                <button id="removeButton">
                    Remove</button>
                <button id="editButton">
                    Edit</button>
                <button id="startButton">
                    Fight</button>
            </div>
        </div>

        <div class="container" id="right-container">
            <h3 class="robot-name" id="right-robot-name"></h3>
            <div class="image-container">
                <img src="" alt="robot-fighter">
            </div>
            <div class="stats-container">

            </div>
        </div>


    </div>

    <div id="robot-arena">
        <button id="endButton">End Fight</button>
    </div>

    <form id="robot-form" action="database.php" method="post">
        <label for="robot-name">Name: </label>
        <input type="text" id="robot-name" name="robot-name" placeholder="" required maxlength=20>
        <br>

        <label for="robot-type">Type: </label>
        <select id="robot-type" name="robot-type" id="">
            <option value="brawler">Brawler</option>
            <option value="rogue">Rogue</option>
            <option value="assault">Assault</option>
        </select>
        <br>

        <label for="robot-power">Power: </label>
        <input type="number" id="robot-power" name="robot-power" placeholder="" required min=1>
        <br>

        <button id="saveButton" type="button">Save</button>
        <button id="exitButton">Exit</button>
    </form>

    <div id="save-response">
        <p>Saved Successfully</p>
    </div>

    <script src=" https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>

</html>