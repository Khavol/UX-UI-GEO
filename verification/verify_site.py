from playwright.sync_api import sync_playwright

def verify_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8080")

        # Take a screenshot of the Hero section
        page.screenshot(path="verification/hero.png")

        # Scroll down to capture other sections
        page.evaluate("window.scrollTo(0, 1000)")
        page.wait_for_timeout(1000) # Wait for animations
        page.screenshot(path="verification/about.png")

        page.evaluate("window.scrollTo(0, 2000)")
        page.wait_for_timeout(1000)
        page.screenshot(path="verification/services.png")

        browser.close()

if __name__ == "__main__":
    verify_site()