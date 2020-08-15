# kleinhafen.ch

This is the Kleinhafen website!

## Configuration

Set the URL to the Kleinhafen API in `config.js`, with a trailing slash:

```
apiUrl: 'https://kleinhafen.ch/api/',
```

If the website uses HTTPS, note that this URL needs to be HTTPS too.

Install dependencies with `npm install`.

## Development

Run the development serve with `npm run serve`.

## Production

Compile the website as static files for production with `npm run build`.
You can then point an e.g. nginx server to the `dist/` folder.

## To do

### Do now

* [ ] Add German version
* [x] Change pricing structure: Membership (190.—), Fix Desk (+200.—)
* [x] Remove duplicate features between the two plans
* [ ] Renew SSL

### Stuff we need

* [ ] Change text for flex desk → KH membership?
* [ ] Hourly/daily prices for flex desk → KH membership?

### Wait for materials

* [ ] Make features clearer
* [ ] Update photos for plans
* [ ] Update header video

## Author / Contact

* Vlad-Stefan Harbuz <vlad@vladh.net>
