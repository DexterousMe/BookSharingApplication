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
    $lender_email=$data['lender_email'];
    $stmt=$conn->query("SELECT bk.title,bk.id ,bk.author ,bk.location,u.firstname,u.lastname,r.borrower_email FROM  book bk,user u,return_request r WHERE r.return_status=0 AND r.borrower_email=u.email AND bk.id = r.bookId AND r.lender_email = '".$lender_email."' ");
    $stmt->execute();
    //$result=$stmt->fetch(PDO::FETCH_ASSOC);
    //echo $result;
    //The procedure returns only a bool value.
    $format=array();
    while($row1=$stmt->fetch(PDO::FETCH_ASSOC)){
        $format[]=$row1;
    }
    echo json_encode(
        array("message"=>$format)
    );
}
