DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `addReturnRequest`(IN `book_id` INT, IN `borrower_email` VARCHAR(50), IN `lender_email` VARCHAR(50), IN `return_status` INT)
    NO SQL
insert into return_request 
(bookId,borrower_email,lender_email,return_status)
values (book_id,borrower_email,lender_email,return_status)$$
DELIMITER ;