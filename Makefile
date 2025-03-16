deploy:
	ng build --base-href "/reset-festival/"
	npx angular-cli-ghpages --dir=dist/reset-festival/browser