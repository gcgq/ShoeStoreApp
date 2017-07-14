var shoeStoreApp = angular.module("shoeStoreApp",[]);

shoeStoreApp.controller("shoeController", function($scope){

  var Shoes = [
    {
      name:'Shoes01',
      price: Math.random() * 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      soldOut: false,
      images:{
        full:'img/shoes-01.jpg',
        thumb:''
      },
      reviews:[
      ]
      // addReview: function(review){
      //   this.reviews.push(angular.copy(review));
      // }

    },

    {
      name:'Shoes02',
      price: Math.random() * 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      soldOut: false,
      images:{
        full:'img/shoes-02.jpg',
        thumb:''
      },
      reviews:[
      ]
    },

    {
      name:'Shoes03',
      price: Math.random() * 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      soldOut: false,
      images:{
        full:'img/shoes-03.jpg',
        thumb:''
      },
      reviews:[
      ]
    },

    {
      name:'Shoes04',
      price: Math.random() * 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      soldOut: false,
      images:{
        full:'img/shoes-04.jpg',
        thumb:''
      },
      reviews:[
      ]
    },

    {
      name:'Shoes05',
      price: Math.random() * 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      soldOut: false,
      images:{
        full:'img/shoes-05.jpg',
        thumb:''
      },
      reviews:[
      ]
    },

    {
      name:'Shoes06',
      price: Math.random() * 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      soldOut: false,
      images:{
        full:'img/shoes-06.jpg',
        thumb:''
      },
      reviews:[
      ]
    },

    {
      name:'Shoes07',
      price: Math.random() * 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      soldOut: false,
      images:{
        full:'img/shoes-07.jpg',
        thumb:''
      },
      reviews:[
      ]
    },

    {
      name:'Shoes08',
      price: Math.random() * 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      soldOut: false,
      images:{
        full:'img/shoes-08.jpg',
        thumb:''
      },
      reviews:[
      ],
    },

    {
      name:'Shoes09',
      price: Math.random() * 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      soldOut: false,
      images:{
        full:'img/shoes-09.jpg',
        thumb:''
      },
      reviews:[
      ],
    },

    {
      name:'Shoes10',
      price: Math.random() * 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      soldOut: false,
      images:{
        full:'img/shoes-10.jpg',
        thumb:''
      },
      reviews:[
      ]
    },

    {
      name:'Shoes11',
      price: Math.random() * 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      soldOut: false,
      images:{
        full:'img/shoes-11.jpg',
        thumb:''
      },
      reviews:[
      ]
    },

    {
      name:'Shoes12',
      price: Math.random() * 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      soldOut: false,
      images:{
        full:'img/shoes-12.jpg',
        thumb:''
      },
      reviews:[
      ]
    }
  ];

  $scope.shoes = Shoes;
  // $scope.addReview = addReview();
});

shoeStoreApp.controller("panelController", function($scope){
  $scope.tab = 1;

  $scope.selectTab = function(newTab){
    $scope.tab = newTab;
  }
});

shoeStoreApp.controller("reviewController", function($scope){
  $scope.review = {};
  $scope.addReview = function(shoe){
    $scope.review.date = new Date();
    if(!shoe.reviews){
      shoe.reviews=[];
    }
    shoe.reviews.push($scope.review);
    $scope.review = {};
    $scope.reviewForm.$setPristine();
    $scope.reviewForm.$setUntouched();
  }
});

angular.module("shoeStoreApp").directive("shoeDirective", function(){
  return {
    templateUrl: "../templates/shoe-template.html", //`<div>example directive div</div>`
  };
});

angular.module("shoeStoreApp").directive("reviewDirective",function(){
  return {
    templateUrl: "../templates/review-template.html", //`<div>example directive div</div>`
  };
});
