import NextAuth, { InitOptions } from 'next-auth';

const { YAHOO_ID, YAHOO_SECRET } = process.env;

const YAHOO = {
	id: 'yahoo',
	name: 'Yahoo',
	type: 'oauth',
	version: '2.0',
	params: {
		grant_type: 'authorization_code',
	},
	accessTokenUrl: 'https://api.login.yahoo.com/oauth2/get_token',
	authorizationUrl:
		'https://api.login.yahoo.com/oauth2/request_auth?response_type=code',
	clientId: YAHOO_ID,
	clientSecret: YAHOO_SECRET,
};

const options: InitOptions = {
	providers: [YAHOO],
};

export default (req, res) => NextAuth(req, res, options);
