This is minimal proxy to bypass dart language's certificate problem.
If you are in a corporate, which messes with SSL certs, pub doesn't work and fails with SSL error.
You can simply clone and run this repo with "npm start" this repo, to act as a proxy.
Then you need to set the pub url with
```
set PUB_HOSTED_URL=http://localhost:5000
```
and
```
pub get
```
