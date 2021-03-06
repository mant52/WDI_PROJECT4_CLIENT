angular
.module('WDI_Project_4')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.login = () => {
    User
    .login(vm.user).$promise
    .then(() => {
      CurrentUserService.getUser();
      $state.go('postsIndex');
    }, err => {
      console.log(err);
    });
  };
}
