# Kleinhafen API

This project serves the kleinhafen.ch website, as well as the small API
required for it.

## Configuration

The SMTP username and password for the emails should be set in
`config/config.js`.

Install dependencies with `npm install`.

## Development

To start the server, run `node server.js`.

## Production

Production deployments are done using Supervisor. To start the server, simply
run `supervisord`.

To stop the server, kill the PID stored in `supervisord.pid`.
`kill $(cat supervisord.pid)` will suffice to stop the Supervisor instance.
The server itself then probably also needs to be killed — find it with
`ps aux | grep node` and kill it with `kill`. Maybe we can improve this
process in the future.

## Author / Contact

* Vlad-Stefan Harbuz <vlad@vladh.net>
