DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCountOfBooks`(OUT `count` INT)
SELECT count(*) INTO count FROM BOOK$$
DELIMITER ;