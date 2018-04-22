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
    $bid=$data["bid"];
    $b_email=$data['b_email'];
    $l_email=$data['lender_email'];

    $stmt=$conn->query("CALL updateReturnRequestStatus('" .$bid. "','" .$b_email. "','" .$l_email. "');");
    $stmt=$conn->query("CALL removeTransaction('" .$bid. "','" .$b_email. "','" .$l_email. "');");
    $stmt=$conn->query("CALL makeBookAvailable('" .$bid. "');");


    //$stmt2=$conn->query("SELECT @p1 AS EMAIL");
    $result2 = $stmt->fetch(PDO::FETCH_ASSOC);

    $format=array();
    echo json_encode(
        $format
    );
}