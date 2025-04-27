<?php
// Connect to Database
$hostname = "localhost"; // or your server IP
$username = "your_username";
$password = "your_password";
$dbname = "my_items_db";

$conn = mysqli_connect($hostname, $username, $password, $dbname);

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}

// Handle claiming an item
if (isset($_POST['claim'])) {
    $itemId = $_POST['item_id'];

    $claimQuery = "UPDATE items SET Claimed = 1 WHERE ItemID = $itemId";
    mysqli_query($conn, $claimQuery);
}

// Fetch all items
$query = "SELECT * FROM items";
$result = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Item List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            background-color: #f2f2f2;
        }
        table {
            width: 80%;
            margin: auto;
            border-collapse: collapse;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        th, td {
            padding: 15px;
            text-align: center;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #4CAF50;
            color: white;
            font-size: 18px;
        }
        tr:hover {
            background-color: #f1f1f1;
        }
        .claim-button {
            padding: 10px 20px;
            background-color: #007BFF;
            border: none;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
        .claim-button:disabled {
            background-color: gray;
            cursor: not-allowed;
        }
    </style>
</head>
<body>

<h2 style="text-align: center;">Item Claim List</h2>

<table>
    <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Link</th>
        <th>Action</th>
    </tr>
    <?php while($row = mysqli_fetch_assoc($result)): ?>
    <tr>
        <td><?php echo htmlspecialchars($row['ItemName']); ?></td>
        <td>$<?php echo number_format($row['Price'], 2); ?></td>
        <td><a href="<?php echo htmlspecialchars($row['Link']); ?>" target="_blank">View Item</a></td>
        <td>
            <form method="POST">
                <input type="hidden" name="item_id" value="<?php echo $row['ItemID']; ?>">
                <button 
                    type="submit" 
                    name="claim" 
                    class="claim-button"
                    <?php echo $row['Claimed'] ? 'disabled' : ''; ?>>
                    <?php echo $row['Claimed'] ? 'Claimed' : 'Claim'; ?>
                </button>
            </form>
        </td>
    </tr>
    <?php endwhile; ?>
</table>

</body>
</html>