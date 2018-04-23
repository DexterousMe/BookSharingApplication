# Wolf-Share: Book Sharing Application

A web based book sharing application for NCSU community, developed as a part of Software Engineering Course - CSC 510.
This is second phase of development, where we enhanced application features and incorporated some new features in it.

## Key Features of Application

* Signup and Login facility for only verified NCSU users.
* Flexibility to share Library and personal books.
* Ratings availability for each lender and borrower.
* Condition of book wiz. new, old and normal is available to borrower for his information.
* Location Feature added. Now book can be searched using location mentioned.
* Payment integration with PayPal Service. Deafulters will be charged according to policy of fine defined. Fine also depends on condition of book.
* Return of book can be done online now. Return request can be initiated by borrower using new system.
* Application is highly scalable and avaialbe for users. Application is deployed on Amazon EC2.

## Technology Stack
The current usage of technologies for accomplishing project goals are discussed below:

* MySQL - The databse of the project is developed in MySQL and are using phpMyAdmin administration tool.
* PHP - It is used to code the backend of the project. We are using PhpStorm as our IDE.
* HTML5/CSS3 - HTML, a markup language and CSS, a style sheet language are used as primary laguages for application's frontend development. 
* XAMPP/WAMP - Used as webserver solution stack.

## Installation Instructions(for handover)
1. Install XAMPP or WAMPP (link provided) XAMPP:https://www.apachefriends.org/download.html WAMPP:http://www.wampserver.com/en/
2. Clone the Git Repository in the htdocs folder or www folder for xampp and wampp respectivley.
3. Setup ports in the XAMPP/WAMPP for MySQL(using PHPmyAdmin) and localhost.
4. To setup the Database, open PHPmyAdmin in your browser and create a database called "booksharingapplication" (without quotes).
5. Then click on the import button in PHPmyAdmin and provide the file "booksharingapplication.sql" inside the procedures folder to import the database, tables and procedures.
6. Run localhost:portno/BookSharingApplication/index.html
7. Congratulations, your website is setup.


## Team
[Abhinandan Deshpande](https://github.com/abhinandan27),
[Deepak Patil](https://github.com/deepak15493),
[Kanchan Bisht](https://github.com/DexterousMe),
[Prashant Nagdeve](https://github.com/PrashantNagdeve)

Mentor: [Amritanshu Agrawal](https://github.com/amritbhanu)

Professor: [Tim Menzies](https://github.com/timm)
