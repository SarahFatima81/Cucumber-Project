package stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {
	
	WebDriver driver;
	
	@Given("^The firefox browser is open with the Facebook page$")
	public void the_firefox_browser_is_open_with_the_Facebook_page() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\syed\\Documents\\chromedriver_win32\\chromedriver.exe");
		 driver = new ChromeDriver();
		
		 driver.get("http://www.facebook.com");

	   
	}
	
	@When("^The user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_enters_and(String usrname, String pwd) throws Throwable {
	    
		driver.findElement(By.id("email")).sendKeys(usrname);
		driver.findElement(By.id("pass")).sendKeys(pwd);
		
	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
	    driver.findElement(By.id("loginbutton")).click();
		
	    
	}
	@Then("^application should be closed$")
	public void closeBrowser() throws Throwable{
		
		driver.quit();
	}



}
