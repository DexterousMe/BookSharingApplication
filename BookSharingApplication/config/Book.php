<?php
class Book{
 
    // database connection and table name
    private $conn;
    private $table_name = "Book";
 
    // object properties
    public $id;
    public $email;
    public $title;
    public $genre;
    public $author;
    public $start_time;
    public $end_time;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    function read(){
 
    // select all query
        $query = "SELECT * FROM " . $this->table_name . "p WHERE ".p.start_Date_Time - date("m-d-Y h-i-sa")>= 0;
 
    // prepare query statement
        $stmt = $this->conn->prepare($query);
 
    // execute query
        $stmt->execute();
 
        return $stmt;
    }
}