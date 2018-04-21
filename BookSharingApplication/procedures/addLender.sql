DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `addLender`(IN `email` VARCHAR(50), IN `ratings` FLOAT, IN `no_of_reviews` INT(11))
    NO SQL
INSERT INTO `lender` ( `email`, `ratings`, `no_of_reviews`) VALUES
(email, ratings, no_of_reviews)$$
DELIMITER ;