import { test, expect } from '@playwright/test';

//Welcome screen elements visibility

test('Welcome screen elements visibility', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Welcome to Earth Wallet' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Welcome to Earth Wallet');

  await expect(page.getByRole('button', { name: 'Create Wallet' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Import Wallet' })).toBeVisible();

  await expect(page.getByText('Earth Wallet stores your')).toBeVisible();
  await expect(page.locator('#root')).toContainText('Earth Wallet stores your cryptographic keys on your device. All trades are executed via decentralized protocols so that your crypto never ends up in the hands of centralized exchanges.');
});

//"Add wallet" screen elements visibility

test('"Add wallet" screen', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Add Wallet' })).toBeVisible();
  await expect(page.locator('h2')).toContainText('Add Wallet');
  await expect(page.getByText('Create a new wallet or add an')).toBeVisible();
  await expect(page.locator('#react-portal-modal-container')).toContainText('Create a new wallet or add an existing one.');
  await expect(page.getByRole('button', { name: 'New Wallet Create new wallet' })).toBeVisible();
  await expect(page.locator('#react-portal-modal-container')).toContainText('New Wallet');
  await expect(page.locator('#react-portal-modal-container')).toContainText('Create new wallet');
  await expect(page.getByRole('button', { name: 'Existing Wallet Import wallet' })).toBeVisible();
  await expect(page.locator('#react-portal-modal-container')).toContainText('Existing Wallet');
  await expect(page.locator('#react-portal-modal-container')).toContainText('Import wallet with a 24 or 12 secret recovery words');
  await expect(page.getByRole('button', { name: 'Testnet Account Import wallet' })).toBeVisible();
  await expect(page.locator('#react-portal-modal-container')).toContainText('Testnet Account');
  await expect(page.locator('#react-portal-modal-container')).toContainText('Import wallet with a 24 secret recovery words to Testnet');
  await expect(page.getByRole('button', { name: 'New Multi-Wallet Account Beta' })).toBeVisible();
  await expect(page.locator('#react-portal-modal-container')).toContainText('New Multi-Wallet AccountBeta');
  await expect(page.locator('#react-portal-modal-container')).toContainText('Manage multiple wallets with a single secret recovery phrase');
  await expect(page.getByRole('button', { name: 'Watch Account For monitor' })).toBeVisible();
  await expect(page.locator('#react-portal-modal-container')).toContainText('Watch Account');
  await expect(page.locator('#react-portal-modal-container')).toContainText('For monitor wallet activity without recovery phrase');
  await expect(page.getByText('Hardware Wallets')).toBeVisible();
  await expect(page.locator('#react-portal-modal-container')).toContainText('Hardware Wallets');
  await expect(page.getByRole('button', { name: 'Pair with Signer Completely' })).toBeVisible();
  await expect(page.locator('#react-portal-modal-container')).toContainText('Pair with Signer');
  await expect(page.locator('#react-portal-modal-container')).toContainText('Completely offline, air-gapped, all TON features');
  await expect(page.getByRole('button', { name: 'Pair with Ledger Hardware' })).toBeVisible();
  await expect(page.locator('#react-portal-modal-container')).toContainText('Pair with Ledger');
  await expect(page.locator('#react-portal-modal-container')).toContainText('Hardware module, Bluetooth or USB-C, limited TON features');
  await expect(page.getByRole('button', { name: 'Pair with Keystone A higher' })).toBeVisible();
  await expect(page.locator('#react-portal-modal-container')).toContainText('Pair with Keystone');
  await expect(page.locator('#react-portal-modal-container')).toContainText('A higher level of security with AIR-GAP hardware wallet');
  await expect(page.locator('.sc-laRQQM')).toBeVisible();
  await page.locator('.sc-laRQQM').click();
  await expect(page.getByRole('button', { name: 'Get started' })).toBeVisible();
});