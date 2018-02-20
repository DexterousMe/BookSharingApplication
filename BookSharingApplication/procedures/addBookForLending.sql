delimiter //

CREATE PROCEDURE `addBookForLending`(
IN inptemail VARCHAR(50),
IN inpttitle VARCHAR(30),
IN inptgenre VARCHAR(100),
IN inptauthor VARCHAR(100),
IN inptstartdatetime DATETIME,
IN inptenddatetime DATETIME,
OUT check INT
 )
 
 
BEGIN
      
      insert into book 
      (email,title,author,genre,start_Date_Time,end_Date_Time)
      values 
      (inptemail,inpttitle,inptauthor,inptgenre,inptstartdatetime,inptenddatetime);
END//