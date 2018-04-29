DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `addReviewForTransaction`(IN `inptbookid` INT(6))
    NO SQL
insert into reviews(transaction_id) SELECT id from transaction where book_Id = inptbookid$$
DELIMITER ;