import { defineNuxtPlugin, useHead } from '#imports'

export default defineNuxtPlugin({
	name: 'nuxt-cloudflare-analytics',
	paralell: true,
	setup(nuxt) {
		const config = nuxt.runtimeConfig.public.nuxtCloudflareAnalytics

		const beaconData = JSON.stringify({
			token: config.token,
			spa: true,
		})

		const scriptPath = config.scriptPath || 'https://static.cloudflareinsights.com/beacon.min.js'

		useHead({
			script: [
				{
					defer: true,
					src: scriptPath,
					'data-cf-beacon': beaconData,
				},
			],
		})
	},
})
