DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getReturnBookNotification`(IN `lender_email` VARCHAR(50), OUT `count` INT)
    NO SQL
SELECT count(*) into count
      FROM return_request r
      WHERE r.lender_email=lender_email AND r.return_status=0$$
DELIMITER ;