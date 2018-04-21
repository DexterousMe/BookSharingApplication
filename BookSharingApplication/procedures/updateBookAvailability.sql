DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateBookAvailability`(IN `inptbookid` INT(6))
UPDATE book 
      set availability = 0
      where id = inptbookid$$
DELIMITER ;