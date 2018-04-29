DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `makeBookAvailable`(IN `bid` INT)
    NO SQL
UPDATE book 
      set availability = 1
      where id = bid$$
DELIMITER ;