/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setShadowDOM(true);
navigateTo("https://staging.vcsdatabase.com/login");
var LoginName="PRIYANK2";
log(LoginName);
setValue(fallback(`textbox(0, _in(custom("sympl-text-field", "name")))`,
   `textbox(0, _in(custom("sympl-text-field", {'id':'name'})))`,
   `textbox("sympl-input-1")`,
   `textbox("sympl-input-field")`,
   `byJQuery('input[name="sympl-input-1"]')`,
   `byXPath('//*[@name="sympl-input-1"]')`,
   `byXPath('//*[@class="sympl-input-field"]')`,
   `byXPath("//sympl-text-field[@id='name']/sympl-input/div/input")`,
   `byJQuery('#name > .sympl-text-field.hydrated > .sympl-input-field--wrapper > .sympl-input-field')`,
   `byJQuery('sympl-text-field[class="text_field hydrated"] > sympl-input[class="sympl-text-field hydrated"] > div[class="sympl-input-field--wrapper"] > input[class="sympl-input-field"]')`,
   `byXPath("id('name')/sympl-input[@class='sympl-text-field hydrated']/div[@class='sympl-input-field--wrapper']/input[@class='sympl-input-field']")`,
   `byXPath('/html/body/div[2]/div/div/div/form/sympl-text-field/sympl-input/div/input')`),LoginName);
setValue(fallback(`password(0, _in(custom("sympl-password-field", "password")))`,
   `password(0, _in(custom("sympl-password-field", {'id':'password'})))`,
   `password("sympl-input-0")`,
   `password("sympl-input-field")`,
   `byJQuery('input[name="sympl-input-0"]')`,
   `byXPath('//*[@name="sympl-input-0"]')`,
   `byXPath("//sympl-password-field[@id='password']/sympl-input/div/input")`,
   `byJQuery('#password > .sympl-password-field.hydrated > .sympl-input-field--wrapper > .sympl-input-field')`,
   `byJQuery('sympl-password-field[class="text_field password_block hydrated"] > sympl-input[class="sympl-password-field hydrated"] > div[class="sympl-input-field--wrapper"] > input[class="sympl-input-field"]')`,
   `byXPath("id('password')/sympl-input[@class='sympl-password-field hydrated']/div[@class='sympl-input-field--wrapper']/input[@class='sympl-input-field']")`,
   `byXPath('/html/body/div[2]/div/div/div/form/sympl-password-field/sympl-input/div/input')`),"Midas123");
click(fallback(`submit(0, _in(custom("sympl-primary-button", "login_button2")))`,
   `submit(0, _in(custom("sympl-primary-button", {'id':'login_button2'})))`,
   `submit("Sign in")`,
   `submit("primary-btn-sm")`,
   `byXPath('//*[text()="Sign in"]')`,
   `byJQuery('#login_button2 > .primary-btn-sm')`,
   `byXPath("id('login_button2')/button[@class='primary-btn-sm']")`,
   `byXPath("//sympl-primary-button[@id='login_button2']/button")`,
   `byJQuery('div[class="sympl-grid password_block"] > div[class="sympl-col-6"] > sympl-primary-button[class="sign_button password_block hydrated"] > button[class="primary-btn-sm"]')`,
   `byXPath('/html/body/div[2]/div/div/div/form/div/div[2]/sympl-primary-button/button')`));
assertContainsText(fallback(`byXPath('//*[text()="Welcome to"]')`,
   `span("Welcome to")`,
   `byXPath("id('wrapper')/header[@class='alloy_header']/div[@class='container']/div[@class='logo_header']/div[@class='top_headline']/h2[1]/span[1]")`,
   `byXPath("//div[@id='wrapper']/header/div[2]/div/div[2]/h2/span")`,
   `byXPath('/html/body/div[2]/header/div[2]/div/div[2]/h2/span')`),"Welcome to");
