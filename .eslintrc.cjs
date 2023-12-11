module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-essential'
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'parser': '@typescript-eslint/parser'
	},
	'plugins': [
		'@typescript-eslint',
		'vue'
	],
	'rules': {
		'quotes': ['warn', 'single'],  // 如果不是单引号，则报错
		'vue/multi-word-component-names': 'off',
	}
}
