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
   
    $book_id=$data["book_id"];
    $borrower_email=$data['borrower_email'];
    $lender_email=$data['lender_email'];
    $return_status=$data['return_status'];
   

    $stmt=$conn->query("CALL addReturnRequest('" .$book_id. "','" .$borrower_email. "','" .$lender_email. "','" .$return_status. "');");
    //$stmt2=$conn->query("SELECT @p1 AS EMAIL");
    $result2 = $stmt->fetch(PDO::FETCH_ASSOC);

    //The procedure returns only a bool value.
    $format=array();
    echo json_encode(
        $format
    );
}