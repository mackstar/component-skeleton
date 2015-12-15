# Requirements

For running tests etc you will need > Node.js version 5.1

# Component Skeleton

At its heart is a `component.json` file, this shows all of the files needed to create your component.

An example of a working component can be found at:

```
https://github.com/sky-uk/polaris-masthead/tree/master/components/masthead/0.0.2
```

## Concatinating JS

Create your JS in the scripts directory and add them to the component.json then you can install them using `npm run bundle`.

## Running development server

`npm run start` will boot the app on localhost:3000

## Testing

`npm test` runs jasmine tests in the  `test` directory. JS files at the top level of scripts directory will be automatically loaded.

## Creating Fixtures

`npm fixture`

## Loading fixtures in tests

`loadFixtures('file-name.html');`







