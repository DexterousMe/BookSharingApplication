<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// Create database
$sql = "CREATE DATABASE BookSharingApplication";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "BookSharingApplication";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// sql to create table
$sql = "CREATE TABLE User (
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
addr1 VARCHAR(100) NOT NULL,
addr2 VARCHAR(100),
city VARCHAR(100) NOT NULL,
state VARCHAR(2) NOT NULL,
zipcode VARCHAR(5) NOT NULL,
email VARCHAR(50) NOT NULL PRIMARY KEY,
reg_date TIMESTAMP,
sec_code INT(5),
verification_status BOOLEAN,
password VARCHAR(30) NOT NULL,
CONSTRAINT chk_state CHECK (state IN ('AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','GU','PR','VI'))
)";

if ($conn->query($sql) === TRUE) {
    echo "Table User created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$sql = "CREATE TABLE Lender (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
email VARCHAR(50) NOT NULL,
ratings FLOAT(3,2) ,
no_of_reviews INT,
FOREIGN KEY (email) REFERENCES User(email)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table Lender created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$sql = "CREATE TABLE Borrower (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
email VARCHAR(50) NOT NULL,
ratings FLOAT(3,2) ,
no_of_reviews INT,
FOREIGN KEY (email) REFERENCES User(email)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table Borrower created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$sql = "CREATE TABLE Book (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
email VARCHAR(50) NOT NULL,
title VARCHAR(50) NOT NULL,
author VARCHAR(50) NOT NULL,
genre VARCHAR(50) NOT NULL,
start_Date_Time DATETIME NOT NULL,
end_Date_Time DATETIME NOT NULL,
FOREIGN KEY (email) REFERENCES User(email)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table Book created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$sql = "CREATE TABLE TRANSACTION (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
lender_email VARCHAR(50) NOT NULL,
borrower_email VARCHAR(50) NOT NULL,
book_Id INT(6) NOT NULL,
start_Date_Time DATETIME NOT NULL,
end_Date_Time DATETIME NOT NULL,
method_Of_Delivery VARCHAR(3) NOT NULL,
location VARCHAR(100) NOT NULL,
borrow_Review_Approve BOOLEAN,
lender_Review_Approve BOOLEAN,
CONSTRAINT chk_method CHECK (method_Of_Delivery IN ('HD','MCP','PK')),
FOREIGN KEY (lender_email) REFERENCES User(email),
FOREIGN KEY (borrower_email) REFERENCES User(email),
FOREIGN KEY (book_Id) REFERENCES Book(id)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table TRANSACTION created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$sql = "CREATE TABLE BorrowRequest (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
borrower_email VARCHAR(50) NOT NULL,
start_Date_Time DATETIME NOT NULL,
end_Date_Time DATETIME NOT NULL,
FOREIGN KEY (borrower_email) REFERENCES User(email)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table Book created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>