import type { Locator, Page } from '@playwright/test';

const selectors = {
	adminBar: '#wpadminbar',
};

export class WPAdminPage {
	private readonly page: Page;
	public readonly adminBar: Locator;

	/**
	 * Constructs an instance of the component.
	 *
	 * @param { Page } page The underlying page
	 */
	constructor( page: Page ) {
		this.page = page;
		this.adminBar = page.locator( selectors.adminBar );
	}

	/**
	 * Navigate to WP Admin
	 */
	public visit(): Promise<unknown> {
		return this.page.goto( '/wp-admin' );
	}
}
