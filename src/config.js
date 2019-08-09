const config = {
	firebase: {
		apiKey: 'AIzaSyCBeAd5ibFPwNvgm5uU3d46Yvqo_vNAPhw',
		authDomain: 'robometer-b3a8d.firebaseapp.com',
		databaseURL: 'https://robometer-b3a8d.firebaseio.com'
	},
	env: {
		production: {
			firebase: {
				apiKey: 'AIzaSyDoaUvXzv7g2luuKIOccoYHZ7TsQlvna1w',
				authDomain: 'robometer-f5080.firebaseapp.com',
				databaseURL: 'https://robometer-f5080.firebaseio.com'
			}
		}
	}
};

const env = process.env.NODE_ENV || '';

const envConfig = config.env[env] || {};
delete config.env;

export default Object.assign({}, config, envConfig);