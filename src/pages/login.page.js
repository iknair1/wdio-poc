import config from '../../../../conf/base.conf';

const loginPage = {
  openERHub: () => browser.url(config.baseUrl),
  username: () => browser.element("//input[@data-selector='username']"),
  password: () => browser.element("//input[@data-selector='password']"),
  submit: () => browser.element("//button[@data-selector='button-login']"),
  headerLogo: () => browser.element("//[@data-selector='header-logo']"),

  isDashboardLoaded: function() {
    try {
      this.headerLogo().waitForExist();
      return true;
    } catch (e) {
      return false;
    }
  }
};

export default loginPage;