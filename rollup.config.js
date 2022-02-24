import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias'
import image from '@rollup/plugin-image'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only'
import sveltePreprocess from 'svelte-preprocess'
import path from 'path'

const projectRootDir = path.resolve(__dirname)
const production = !process.env.ROLLUP_WATCH

function serve() {
	let server

	function toExit() {
		if (server) server.kill(0)
	}

	return {
		writeBundle() {
			if (server) return
			server = require('child_process').spawn(
				'npm',
				['run', 'start', '--', '--dev'],
				{
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				}
			)

			process.on('SIGTERM', toExit)
			process.on('exit', toExit)
		}
	}
}

export default {
	input: 'src/index.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'static/build/bundle.js'
	},
	plugins: [
		svelte({
			compilerOptions: {
				dev: !production
			},
			preprocess: sveltePreprocess({
				sourceMap: !production,
				postcss: {
					plugins: [require('tailwindcss')(), require('autoprefixer')()]
				}
			})
		}),
		alias({
			entries: [
				{ find: '@assets', replacement: path.resolve(projectRootDir, 'static') },
				{ find: '@lib', replacement: path.resolve(projectRootDir, 'src/lib') },
				{ find: '@helpers', replacement: path.resolve(projectRootDir, 'src/helpers') },
				{ find: '@hooks', replacement: path.resolve(projectRootDir, 'src/hooks') }
			]
		}),
		image(),
		css({ output: 'bundle.css' }),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		!production && serve(),
		!production && livereload('static'),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
}
