# Readme

This directory contains `screenshot.py` - a script that can be used to take a fullscreen screenshot of the production chains.

## Dependencies

- [Poetry](https://python-poetry.org) for dependency management.
- Chrome installed locally.

Run `quasar dev` from the root of the repo following the instructions in the main README. This starts a development server at <http://localhost:9000>.

## Installation

Install the dependencies with

```
poetry install
```

Activate the poetry shell

```
poetry shell
```

Open `screenshot.py` and change the `URL` variable:

- `http://localhost:9000/` to screenshot the chains from base through Season 2.
- `http://localhost:9000/expansions` to screenshot the chains from Season 3 through Season 4.

Increase the `WAIT_TIME` variable as needed. 60 seconds should be enough time for the page to load all chains but this can vary.
