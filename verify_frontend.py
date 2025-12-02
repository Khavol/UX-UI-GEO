import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        try:
            await page.goto("http://localhost:8000")

            # This script will find all elements that are meant to fade in on scroll
            # and apply the .is-visible class to make them appear for the screenshot.
            await page.evaluate("""() => {
                const sections = document.querySelectorAll('.fade-in-section');
                sections.forEach(section => {
                    section.classList.add('is-visible');
                });
            }""")

            await page.screenshot(path="screenshot.png", full_page=True)
            print("Screenshot taken and saved to screenshot.png")
        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
