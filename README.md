# Facebook Instant Game Startup Pack
<p>React, TypeScript and Vite</p>

## Installation and Run Local
- npm i
- npm run build && http-server --ssl -c-1 -p 8080 -a 127.0.0.1 dist/
- Open in Chrome tab - https://localhost:8080
- Then in second tab - https://www.facebook.com/embed/instantgames/YOUR_GAME_ID/player?game_url=https://localhost:8080

<p><b>Should rebuild after each change</b></p>

## Build And Deploy
- npm i
- npm run build
- zip dist directory
- upload to Facebook Instant Games

### Introduction how local test server works
https://developers.facebook.com/docs/games/build/instant-games/get-started/test-publish-share