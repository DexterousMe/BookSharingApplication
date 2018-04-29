DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateReturnRequestStatus`(IN `bid` INT, IN `b_email` VARCHAR(50), IN `l_email` VARCHAR(50))
    NO SQL
UPDATE return_request 
      set return_status = 1
      where bookId = bid AND borrower_email=b_email AND lender_email=l_email$$
DELIMITER ;