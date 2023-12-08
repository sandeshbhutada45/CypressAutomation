import{Login}from "../Pages/PomPage.cy" //Import Class
 const lp= new Login()

it('Page Object Model Valid Credential', function()
{
lp.navigateURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
lp.enterUsernamePassword()
lp.clickButton()
} 
)

