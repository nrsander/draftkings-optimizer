# DraftKings Optimizer

:globe_with_meridians: http://draftkings-optimizer-dev.ca-central-1.elasticbeanstalk.com/

A web app that generates the most optimized lineups for DraftKings.

## Table of Contents

1. [Features](#features)
2. [Todo](#todo)
3. [Contributing](#contributing)
4. [Developers](#developers)

## Features

1. Fill out `.env.example` and rename to `.env`
2. Run `npm i` to install NextJS and other dependencies
3. Run `npm run develop` to run NextJS in dev mode

## Todo

1. Import/export .csv
2. Add other dfs providers (Yahoo, Fanduel, etc)
3. More [pydfs](https://github.com/DimaKudosh/pydfs-lineup-optimizer) rules
4. Implement login service and SQL database
5. View players stats/analytics page

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Developers

This project uses [pydfs](https://github.com/DimaKudosh/pydfs-lineup-optimizer) to optimize the lineups and a [Python + Flask backend](https://github.com/markjoeljimenez/draftkings-optimizer.backend) to serve endpoints.

### Installation

1. Update `.env.example` and rename to `.env`
2. Run `npm i` to install NextJS and other dependencies
3. Run `npm run develop` to run NextJS in dev mode
