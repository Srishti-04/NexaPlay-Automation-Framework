import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { InventoryPage } from '../pages/InventoryPage';

import { captureScreenshot } from '../utils/screenshotUtil';

test(
    'Valid Login and Add To Cart Test',
    async ({ page }) => {

        const loginPage =
            new LoginPage(page);

        const inventoryPage =
            new InventoryPage(page);

        await loginPage
            .navigateToLoginPage();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await inventoryPage
            .addBackpackToCart();

        await inventoryPage
            .validateCartBadge();

        await captureScreenshot(
            page,
            'successful-login-and-cart'
        );
    }
);