import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'vite';
import fs from 'fs';

console.log(`${__dirname}`)

export default defineConfig({
	plugins: [sveltekit()],
	server: {
        https: {
            key: fs.readFileSync(`${__dirname}/fs/cert/cert.key`),
            cert: fs.readFileSync(`${__dirname}/fs/cert/cert.crt`)
        },
        proxy: {}
	}
});
