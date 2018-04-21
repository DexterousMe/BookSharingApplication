DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `addBorrower`(IN `email` VARCHAR(50), IN `ratings` FLOAT, IN `no_of_reviews` INT(11))
    NO SQL
INSERT INTO `borrower` ( `email`, `ratings`, `no_of_reviews`) VALUES
(email, ratings, no_of_reviews)$$
DELIMITER ;