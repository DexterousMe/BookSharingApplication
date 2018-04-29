DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getLenderByEmail`(IN `email` VARCHAR(50), OUT `lender` VARCHAR(50))
    NO SQL
select l.email as lender
from lender l
where l.email=email$$
DELIMITER ;