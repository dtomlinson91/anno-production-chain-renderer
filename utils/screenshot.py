import pathlib
import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


# URL = "http://localhost:9000/"
URL = "http://localhost:9000/#/expansions"
WAIT_TIME = 180


def main():
    # define screenshot file
    screenshot_file = (
        (pathlib.Path(__file__).resolve().parents[0] / "base_production_chains").with_suffix(".png")
        if "expansions" not in URL
        else (pathlib.Path(__file__).resolve().parents[0] / "expansion_production_chains").with_suffix(".png")
    )

    # create chrome options
    options = Options()
    options.add_experimental_option("detach", True)
    options.add_argument("--headless")

    # create driver
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    driver.maximize_window()

    # open quasar app locally
    driver.get(url=URL)

    # wait for page to load
    WebDriverWait(driver=driver, timeout=10.0).until(
        EC.presence_of_element_located((By.XPATH, "//main[contains(@class, 'q-page')]"))
    )
    print(f"Waiting {WAIT_TIME}s for page to load.")
    time.sleep(WAIT_TIME)

    # get page width and height
    # https://stackoverflow.com/questions/41721734/take-screenshot-of-full-page-with-selenium-python-with-chromedriver/52572919#52572919
    original_size = driver.get_window_size()
    page_width = driver.execute_script("return document.body.parentNode.scrollWidth")
    page_height = driver.execute_script("return document.body.parentNode.scrollHeight")
    driver.set_window_size(width=page_width, height=page_height)

    element = driver.find_element(by=By.XPATH, value="//main[contains(@class, 'q-page')]")
    element.screenshot(str(screenshot_file))

    print(f"saved screenshot to {screenshot_file}")
    driver.quit()


if __name__ == "__main__":
    main()
