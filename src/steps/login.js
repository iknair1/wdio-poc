import loginPage from '../../model/pages/login.page';

function employerLogin() {
    const TRANSITION_TIMEOUT = 150000;
    this.Given(/^I load the ER hub/, function() {
      loginPage.openERHub();
    });

    this.When(/^ I provide '(.*)' and '(.*)'/, function(username, password) {
    loginPage.username().setValue(username);
    loginPage.password().setValue(password);
    loginPage.submit().click();  
    
    expect(loginPage.isDashboardLoaded(TRANSITION_TIMEOUT)).to.equal(
      true,
      'Error in loading employer dashboard'
    );
  });
}

export default employerLogin;