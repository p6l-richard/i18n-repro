
## Issue: Middleware & i18n does not work together

This is a reproduction of a Next.js issue that you can find [here](https://github.com/vercel/next.js/issues/49656).

When having a middleware.ts file as well as the domain routing feature active, Next.js causes an infinite navigation to the same route.

#### With Middleware & Domain Routing

See the reloading loop [here](https://share.cleanshot.com/czjB0nLr).

#### With Domain Routing only

No reloading loop, see [here](https://share.cleanshot.com/dfTSP5g9).

#### With Middleware only

No reloading loop, see [here](https://share.cleanshot.com/SbqbYmS7).

## To reproduce

1. **Enable local subdomain**. Update `/etc/hosts` file with `echo "127.0.0.1 de.localhost" | sudo tee -a /etc/hosts` (macOS & Linux)
2. **Install dependencies**. `pnpm i`
3. **Run the project**. `pnpm dev`
4. Open <http://localhost:3001>

This will now end up in the loop of navigating to the same domain.
