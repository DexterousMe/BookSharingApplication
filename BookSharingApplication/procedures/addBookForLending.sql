delimiter //

CREATE PROCEDURE `addBookForLending`(
 IN `inptemail` VARCHAR(50),
 IN `inpttitle` VARCHAR(30),
 IN `inptauthor` VARCHAR(100),
 IN `inptgenre` VARCHAR(100),
 IN `inptstartdatetime` DATETIME,
 IN `inptenddatetime` DATETIME,
 IN `inptmod` VARCHAR(3),
 IN `inptbook_status` VARCHAR(50),
 IN `inptlocation` VARCHAR(50)
 )
 
 
BEGIN
      
      insert into book (email,title,author,genre,start_Date_Time,end_Date_Time,methodOfDelivery,book_status,location)
      values(inptemail,inpttitle,inptauthor,inptgenre,inptstartdatetime,inptenddatetime,inptmod,inptbook_status,inptlocation);
END//

