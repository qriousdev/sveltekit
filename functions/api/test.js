export async function onRequest(context) {
	// Contents of context object
	const {
		request, // same as existing Worker API
		env, // same as existing Worker API
		params, // if filename includes [id] or [[path]]
		waitUntil, // same as ctx.waitUntil in existing Worker API
		next, // used for middleware or to fetch assets
		data // arbitrary space for passing data between middlewares
	} = context;

	const envViteHost = env.VITE_HOSTNAME;
	const envViteTest = env.VITE_TEST;
	const envTest = env.TEST_ENV;
	const envHost = env.HOSTNAME;

	const res = `VITE_HOSTNAME: ${envViteHost} || VITE_TEST: ${envViteTest} || TEST_ENV: ${envTest} || HOSTNAME: ${envHost}`;

	return new Response(res);
}
