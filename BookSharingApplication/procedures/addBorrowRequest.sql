delimiter //

CREATE PROCEDURE `addBorrowRequest`(
IN email VARCHAR(50),
IN bookid INT(6),

 )
 
 
BEGIN
      
      insert into borrowrequest 
      (book_Id,borrower_email)
      values 
      (email,bookid);

END//
