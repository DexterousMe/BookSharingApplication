var loginApp = angular.module("loginApp",['ngRoute']);

loginApp.controller('loginController',function($scope,$window,$http){
    console.log("Login Controller");
    $scope.getUserName = function() {
        var user = {userName: $window.sessionStorage.getItem("userEmail")};
        $http({
            method: "POST",
            url: "../config/retriveUserBooks.php",
            data: user
        }).then(function (response) {
            $scope.userName = response.data.message.toUpperCase();
        }, function (response) {
        });
    }
    $scope.logout = function(){
        $window.sessionStorage.removeItem("userEmail");
        window.location.replace("../index.html");
    }
    var email = {email:$window.sessionStorage.getItem("userEmail")};
    $http({
        method: "POST",
        url: "../config/getNotificationsCount.php",
        data: email
    }).then(function(response){
        $scope.count = response.data.count;
    },function(response){
    });
});

loginApp.filter('customBookFilter',function(){
    console.log("Custom Book Filter");
    return function (input, option) {
                
        
        if (!option.type || !option.term) {
            return input;
        }
        var result = [];
        angular.forEach(input,function (val, key) {
            if(val[option.type].toLowerCase().indexOf(option.term.toLowerCase())>-1){
                result.push(val);
            }
        })
        return result;
    }
});


// configure our routes
loginApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'basicPage.html',
            controller  : 'basicController'
        })
        .when('/addBook', {
            templateUrl : 'addBook.html',
            controller  : 'addBookController'
        })
        .when('/lendedBooks', {
            templateUrl : 'lendedBooks.html',
            controller  : 'lendedBooksController'
        })
        .when('/borrowedBooks', {
            templateUrl : 'borrowedBooks.html',
            controller  : 'borrowedBooksController'
        })
        .when('/notifications',{
            templateUrl: 'notification.html',
            controller : 'notificationController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

loginApp.controller('basicController',function($scope,$window,$http){
    console.log("Basic Controller");
    $scope.searchFilter = ["author", "title", "genre","location"];
    $scope.dropdownSelect = false;
    $scope.categorySelect = function(selectedCategory){
        $scope.dropdownSelect = true;
        $scope.showSelected = selectedCategory;
    }
    $http({
        method:"GET",
        url:"../config/RetriveData.php"
    }).then(function(response){
        $scope.booksList = response.data;
    },function(response){
    });
    $scope.bookData = {};
    
    var availValue=0;
    $scope.checkAvailability = function(id){
        var bookIdentity = {bookId:id};
        $http({
            method: "POST",
            url: "../config/retrieveBookInfo.php",
            data: bookIdentity
        }).then(function(response){
            $scope.bookData = response.data.bookData;
            console.log("Details");
            console.log(bookIdentity.bookId);
            console.log($scope.bookData.availability);
            availValue=$scope.bookData.availability;
        },function(response){
        });
    }
    console.log($scope.bookData);
    $scope.requestSentSuccessfully = false;
    $scope.sendBorrowRequest = function(bookId){
        var borrowData = {bookIdentity:bookId,borrowerEmail: $window.sessionStorage.getItem("userEmail")};
       
       
        var bookIdentity = {bookId:bookId};
        $http({
            method: "POST",
            url: "../config/retrieveBookInfo.php",
            data: bookIdentity
        }).then(function(response){
            $scope.bookData = response.data.bookData;
        },function(response){
        });
        
        //console.log($scope.bookData.Email);
        //console.log($window.sessionStorage.getItem("userEmail"));


        if($scope.bookData.Email!=$window.sessionStorage.getItem("userEmail"))
        {
            $http({
                method: "POST",
                url: "../config/BorrowRequest.php",
                data: borrowData
            }).then(function(response){
                console.log("Bookdata")
                console.log($scope.bookData.availability);
                if(response.data.message=="True" && $scope.bookData.availability==1){
                    $scope.requestSentSuccessfully = true;

                     //adding to bookid
                     //var borrowData={book_id:bookId,}

                     //adding entries in borrower
        
                        borrowerData={emailBook:$window.sessionStorage.getItem("userEmail"),ratings:1,no_of_reviews:1}
        
                        //console.log("came here");
                        $http({
                            method: "POST",
                            url: "../config/addBorrower.php",
                            data: borrowerData
                            }).then(function(response){
                                    console.log(response);
                
                            },function(response){
                        });
                      //similarly adding entries to borrow request table
                    /*  var borrowRequestData={emailBook:$window.sessionStorage.getItem("userEmail"),bookId:bookId}
                      $http({
                        method: "POST",
                        url: "../config/addBorrowRequest.php",
                        data: borrowRequestData
                        }).then(function(response){
                                console.log("Resoponsa");
            
                        },function(response){
                    });


                    */
                      //ends
         
                        //borrower ends
                }
            },function(response){
            });
        }
        else $scope.requestSentSuccessfully = false;
       
        
        /*
       //Starts
        $http({
                method: "POST",
                url: "../config/BorrowRequest.php",
                data: borrowData
            }).then(function(response){
                console.log(response.data.message);
                if(response.data.message=="True"){
                    $scope.requestSentSuccessfully = true;
                }
            },function(response){
            });
       //ends
       */
    }
});

loginApp.controller('addBookController',function($scope,$window,$http){
    console.log("Add book Controller");
     
    $scope.title = '';
    $scope.author = '';
    $scope.genre='';
    $scope.startDate = '';
    $scope.endDate = '';
    $scope.deliveryMode = '';
    $scope.bookAddedSuccessfully = false;
    $scope.book_status='';
    $scope.location='';
    $scope.addBook = function(){
        var bookData = {emailBook:$window.sessionStorage.getItem("userEmail"),titleBook:$scope.title,authorBook:$scope.author,genreBook:$scope.genre,startDateBook:$scope.startDate,endDateBook:$scope.endDate,book_status:$scope.book_status,location:$scope.location,deliveryModeBook:$scope.deliveryMode};
        
        //Check with this, 
        //adding lender if he is not available in database
       $scope.lenderMail="";
        var lenderData={emailBook:$window.sessionStorage.getItem("userEmail"),ratings:1,no_of_reviews:1}
        $http({
            method: "POST",
            url: "../config/addLender.php",
            data: lenderData
        }).then(function(response){
            
        },function(response){
           
        });
       
        $http({
            method: "POST",
            url: "../config/LenderData.php",
            data: bookData
        }).then(function(response){
            if(response.data.message=="True"){
                $scope.bookAddedSuccessfully = true;
            }
            else console.log("Adding data unsuccessful");
        },function(response){
        });
    
        
    }

});
loginApp.controller('lendedBooksController',function($scope,$window,$http){
    //console.log("Lended Book Controller");
    var email = {email:$window.sessionStorage.getItem("userEmail")};
    $scope.noBooks = false;
    $http({
        method: "POST",
        url: "../config/getLentBooks.php",
        data: email
    }).then(function(response){
        if(response.data.message=="false"){
            $scope.noBooks = true;
        }
        else{
            $scope.lentBooks = response.data.message;
            console.log($scope.lentBooks);
        }
    },function(response){
    });
});

loginApp.controller('borrowedBooksController',function($scope,$window,$http){
    //console.log("Borrowed Book Controller");
    var email = {email:$window.sessionStorage.getItem("userEmail")};
    $scope.noBooks = false;
    $http({
        method: "POST",
        url: "../config/getBorrowedBooks.php",
        data: email
    }).then(function(response){
        if(response.data.message=="false"){
            $scope.noBooks = true;
        }
        else{
            $scope.borrowedBooks = response.data.message;
            console.log($scope.borrowedBooks);
        }
    },function(response){
    });

    //Return request implementation
    $scope.initiateReturn = function(book)
    {
        var returnData={book_id:book.id,borrower_email:$window.sessionStorage.getItem("userEmail"),lender_email:book.lender_email,return_status:0};
        console.log(returnData);

        $http({
            method: "POST",
            url: "../config/addReturnRequest.php",
            data: returnData
        }).then(function(response){
            console.log("HELLO");
           // $route.reload();
            //$window.location.reload();
        },function(response){
        });


    
    }
    
});

loginApp.controller('notificationController',function($scope,$window,$http,$route){
    //console.log("Notification Controller");



   
    var email = {email:$window.sessionStorage.getItem("userEmail")};
    $http({
        method: "POST",
        url: "../config/LenderNotifications.php",
        data: email
    }).then(function(response){
        $scope.notificationList = response.data.message;
      //  console.log("Coming here");
        console.log(response);
        //console.log($scope.notificationList);
    },function(response){
    });

    
    
   
    $scope.approveBorrowRequest = function(book_id,borrower_email){
        //checking the book availability

        $scope.bookAvailability=true;
        var bookIdentity = {bookId:book_id};
        
        $http({
            method: "POST",
            url: "../config/retrieveBookInfo.php",
            data: bookIdentity
        }).then(function(response){
            $scope.bookData = response.data.bookData;
           
           if(response.data.bookData.availability==1)
                {
                    //console.log("Inside 1")
                    var approvedBookData = {bookId:book_id,borrowerEmail: borrower_email,lenderEmail:$window.sessionStorage.getItem("userEmail")};
                    $http({
                        method: "POST",
                        url: "../config/approveRequest.php",
                        data: approvedBookData
                    }).then(function(response){
                       // console.log("Inside Borrow request approval");
                       // console.log(response);
                        $route.reload();
                        $window.location.reload();
                    },function(response){
                    });
                }
            else {
                $route.reload();
                $window.location.reload();
            }
           
            
        },function(response){
        });
        
        //checking ends
        /*
        if($scope.bookAvailability==1)
        {
            console.log("Inside 1")
            var approvedBookData = {bookId:book_id,borrowerEmail: borrower_email,lenderEmail:$window.sessionStorage.getItem("userEmail")};
            $http({
                method: "POST",
                url: "../config/approveRequest.php",
                data: approvedBookData
            }).then(function(response){
               // console.log("Inside Borrow request approval");
               // console.log(response);
                //$route.reload();
               // $window.location.reload();
            },function(response){
            });
       }
       */
    }

    //console.log("Came here");
    $scope.approveReturnRequest=function(book_id,borrower_email){
        console.log(book_id);
        console.log(borrower_email);
        console.log($window.sessionStorage.getItem("userEmail"));
        var returRequestdata={bid:book_id,b_email:borrower_email,lender_email:$window.sessionStorage.getItem("userEmail")}
        $http({
            method: "POST",
            url: "../config/approveReturnRequest.php",
            data: returRequestdata
        }).then(function(response){
           //$route.reload();
                $route.reload();
                $window.location.reload();
            //console.log($scope.notificationList);
        },function(response){
        });
    }


    var email = {lender_email:$window.sessionStorage.getItem("userEmail")};
    $http({
        method: "POST",
        url: "../config/ReturnRequestNotifications.php",
        data: email
    }).then(function(response){
        $scope.returnBookNotificationList = response.data.message;
      //  console.log("Coming here");
        console.log($scope.returnBookNotificationList);
        //console.log($scope.notificationList);
    },function(response){
    });

   

});
