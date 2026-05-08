import { Page } from '@playwright/test';

export async function captureScreenshot(
    page: Page,
    fileName: string
) {

    await page.screenshot({
        path: `test-results/${fileName}.png`,
        fullPage: true
    });
}