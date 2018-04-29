DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteBook`(IN `book_id` INT)
    NO SQL
DELETE FROM book where id=book_id$$
DELIMITER ;