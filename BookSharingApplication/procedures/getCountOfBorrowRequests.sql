DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCountOfBorrowRequests`(OUT `count` INT(6))
SELECT count(*) INTO count FROM borrowrequest$$
DELIMITER ;