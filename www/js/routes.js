angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('menu.walkerLogin', {
      url: '/page11',
      views: {
        'side-menu21': {
          templateUrl: 'templates/walkerLogin.html',
          controller: 'walkerLoginCtrl'
        }
      }
    })
        
      
    
      
        
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'registerCtrl'
    })
        
      
    
      
        
    .state('billingInformation', {
      url: '/billing',
      templateUrl: 'templates/billingInformation.html',
      controller: 'billingInformationCtrl'
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.ownerHomepage', {
      url: '/home',
      views: {
        'side-menu21': {
          templateUrl: 'templates/ownerHomepage.html',
          controller: 'ownerHomepageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('walkerMenu.walkerHomepage', {
      url: '/page12',
      views: {
        'side-menu23': {
          templateUrl: 'templates/walkerHomepage.html',
          controller: 'walkerHomepageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.profile', {
      url: '/profile',
      views: {
        'side-menu21': {
          templateUrl: 'templates/profile.html',
          controller: 'profileCtrl'
        }
      }
    })
        
      
    
      
        
    .state('walkerMenu.walkerProfile', {
      url: '/page14',
      views: {
        'side-menu23': {
          templateUrl: 'templates/walkerProfile.html',
          controller: 'walkerProfileCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.pupProfile', {
      url: '/pup_profile',
      views: {
        'side-menu21': {
          templateUrl: 'templates/pupProfile.html',
          controller: 'pupProfileCtrl'
        }
      }
    })
        
      
    
      
        
    .state('newPup', {
      url: '/new_pup',
      templateUrl: 'templates/newPup.html',
      controller: 'newPupCtrl'
    })
        
      
    
      
        
    .state('spike', {
      url: '/Spike',
      templateUrl: 'templates/spike.html',
      controller: 'spikeCtrl'
    })
        
      
    
      
        
    .state('bella', {
      url: '/page17',
      templateUrl: 'templates/bella.html',
      controller: 'bellaCtrl'
    })
        
      
    
      
        
    .state('max', {
      url: '/page18',
      templateUrl: 'templates/max.html',
      controller: 'maxCtrl'
    })
        
      
    
      
        
    .state('menu.pricing', {
      url: '/page19',
      views: {
        'side-menu21': {
          templateUrl: 'templates/pricing.html',
          controller: 'pricingCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.contactUs', {
      url: '/page9',
      views: {
        'side-menu21': {
          templateUrl: 'templates/contactUs.html',
          controller: 'contactUsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.aboutSpot', {
      url: '/page10',
      views: {
        'side-menu21': {
          templateUrl: 'templates/aboutSpot.html',
          controller: 'aboutSpotCtrl'
        }
      }
    })
        
      
    
      
    .state('walkerMenu', {
      url: '/side-menu23',
      abstract:true,
      templateUrl: 'templates/walkerMenu.html'
    })
      
    
      
        
    .state('walkerRegistration', {
      url: '/page13',
      templateUrl: 'templates/walkerRegistration.html',
      controller: 'walkerRegistrationCtrl'
    })
        
      
    
      
        
    .state('walkerMenu.walkerAccount', {
      url: '/page16',
      views: {
        'side-menu23': {
          templateUrl: 'templates/walkerAccount.html',
          controller: 'walkerAccountCtrl'
        }
      }
    })
        
      
    
      
        
    .state('walkerMenu.walkerHistory', {
      url: '/page20',
      views: {
        'side-menu23': {
          templateUrl: 'templates/walkerHistory.html',
          controller: 'walkerHistoryCtrl'
        }
      }
    })
        
      
    
      
        
    .state('walkHistory', {
      url: '/page26',
      templateUrl: 'templates/walkHistory.html',
      controller: 'walkHistoryCtrl'
    })
        
      
    
      
        
    .state('menu.lockboxInformation', {
      url: '/page21',
      views: {
        'side-menu21': {
          templateUrl: 'templates/lockboxInformation.html',
          controller: 'lockboxInformationCtrl'
        }
      }
    })
        
      
    
      
        
    .state('myLockbox', {
      url: '/page22',
      templateUrl: 'templates/myLockbox.html',
      controller: 'myLockboxCtrl'
    })
        
      
    
      
        
    .state('returnLockbox', {
      url: '/page23',
      templateUrl: 'templates/returnLockbox.html',
      controller: 'returnLockboxCtrl'
    })
        
      
    
      
        
    .state('menu.mySchedule', {
      url: '/my_schedule',
      views: {
        'side-menu21': {
          templateUrl: 'templates/mySchedule.html',
          controller: 'myScheduleCtrl'
        }
      }
    })
        
      
    
      
        
    .state('requestWalker', {
      url: '/page25',
      templateUrl: 'templates/requestWalker.html',
      controller: 'requestWalkerCtrl'
    })
        
      
    
      
        
    .state('recurringWalks', {
      url: '/page27',
      templateUrl: 'templates/recurringWalks.html',
      controller: 'recurringWalksCtrl'
    })
        
      
    
      
        
    .state('walkerMenu.walkerSchedule', {
      url: '/page28',
      views: {
        'side-menu23': {
          templateUrl: 'templates/walkerSchedule.html',
          controller: 'walkerScheduleCtrl'
        }
      }
    })
        
      
    
      
        
    .state('pupPickup', {
      url: '/page29',
      templateUrl: 'templates/pupPickup.html',
      controller: 'pupPickupCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});