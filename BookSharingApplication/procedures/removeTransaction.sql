DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `removeTransaction`(IN `bid` INT, IN `b_email` VARCHAR(50), IN `l_email` VARCHAR(50))
    NO SQL
DELETE FROM transaction where book_Id=bid AND b_email=borrower_email And lender_email=l_email$$
DELIMITER ;