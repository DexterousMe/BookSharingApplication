<?php
//Add book for lending(6in,1out)
require (__DIR__."/Database.php");
//Connect to Database
//retrieve borrow request
$dbconn = new Database();
$conn = $dbconn->getConnection();

if($conn==false){
    //If database to connection is not established
}
else {
    //Execute a procedure call to validate signup (Check for already present users)
    //get a json file and decode it
    $json = file_get_contents("php://input");
    $data = json_decode($json,true);
    $emailBook=$data["emailBook"];

    $stmt=$conn->query("CALL getLenderByEmail('" .$emailBook. "');");
    //$stmt2=$conn->query("SELECT @p1 AS EMAIL");
    $result2 = $stmt->fetch(PDO::FETCH_ASSOC);
//    $stmt8=$conn->query("SELECT @p7 AS TITLE");
//    $result8 = $stmt8->fetch();
//    $stmt9=$conn->query("SELECT @p8 AS AUTHOR");
//    $result9 = $stmt9->fetch();
//    $stmt10=$conn->query("SELECT @p9 AS GENRE");
//    $result10 = $stmt10->fetch();
//    $stmt3=$conn->query("SELECT @p2 AS STARTDATE");
//    $result3 = $stmt3->fetch();
//    $stmt4=$conn->query("SELECT @p3 AS ENDDATE");
//    $result4 = $stmt4->fetch();
//    $stmt5=$conn->query("SELECT @p4 AS RATINGS");
//    $result5 = $stmt5->fetch();
//    $stmt6=$conn->query("SELECT @p5 AS FIRSTNAME");
//    $result6 = $stmt6->fetch();
//    $stmt7=$conn->query("SELECT @p6 AS LASTNAME");
//    $result7 = $stmt7->fetch();
    //The procedure returns only a bool value.
    $format=array();
    $format['lender'] = $result2['lender'];
    echo json_encode(
        $format
    );
}