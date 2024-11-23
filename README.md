A simple character editor for the Elegy game.

Currently hosted via github pages at https://mkranz.github.io/elegy/

# Install

Setup

```
npm install
```

Run development mode at http://localhost:5173/elegy/

```
npm run dev
```

Build for production 

```
npm run build
``` 

Preview production build at http://localhost:4173/elegy/ 

```
npm run preview
```





# Roadmap

Up next:
 - Automatically roll the appropriate suffer moves when meters reach zero and add impacts accordingly

Possible future features:
- [x] Wire up combat, connections, and elegy moves to the appropriate meter
- [x] Automatically apply more things, eg. conclusion rolls
- [ ] Wire up experience and suffer moves, and XP costs for assets
- [x] Export/Import character data
- [ ] Multiple character support
- [x] Dice rolling functionality
- [x] Validation for the various stats
- [ ] Tooltips explaining the different attributes
- [ ] Add world features ('Truths' in [Chapter 4](/docs/elegy/chapters/chapter4-world.md) )
- [ ] Character journal, markdown editor, similar to starjournal or obsidian
- [x] Dice box animation
- [ ] Dice box sound effects
- [x] Add dice box to Pay the Price
- [ ] Add details for connections, bonds and elegies
- [ ] Improve display of bonus, add selection (eg. from preparations, bonds, etc)
- [x] Fix PWA 
- [ ] Setup hosting via github pages, check [gh-pages](https://github.com/tschaub/gh-pages) for ideas and options


# Dev Notes

## SSL

Local development is done over http. To enable https for local development we can use [basicSsl](https://github.com/vitejs/vite-plugin-basic-ssl) + [https](https://v4.vitejs.dev/config/server-options.html#server-https) (see comments in vite.config for details). However the PWA will NOT be available with self-signed certificates..

Consider using a service like [localtunnel](https://github.com/localtunnel/localtunnel) for test the app over SSL and on various devices.

## PWA 

PWA manifests are generated automatically for production builds via [vite-pwa-org](https://vite-pwa-org.netlify.app/).

Change ```devOptions: false``` to true in ```vite.config.ts``` to enable PWA in development. Note that it currently has some issues with file caching/offline support in dev mode

Favicons are generated via [RealFaviconGenerator](https://realfavicongenerator.net/).
