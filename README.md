# FAX.PLUS JavaScript SDK

<p>
  <h4>Made for third-party developers and organizations to send and receive faxes from their own software or application.</h4>
  <p>
    <a href="#"><img src="https://img.shields.io/npm/v/@alohi/faxplus-api?style=flat-square" alt="NPM version"></img></a>
    <img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="License">
  </p>
</p>

<p>
  <a href="https://apidoc.fax.plus" target="_blank">API Documentation 2.0.0</a>  •
  <a href="https://www.fax.plus" target="_blank">Home</a>  •
  <a href="https://www.fax.plus/help/" target="_blank">Help Center</a>  •
  <a href="https://www.fax.plus/contact-us/" target="_blank">Contact Us</a>
</p>

- Also includes TypeScript definition
- Only available to [Enterprise](https://www.fax.plus/pricing/) clients


## Installation

```
// with npm
npm install faxplus-api

// with yarn
yarn add faxplus-api
```

## Getting Started

Example usage:

```js
// Get the first entry in the corporate member's inbox

const request = await ArchivesApiFp(configuration).listFaxes(MEMBER_UID);

const response = await request(axios);

CDR_ID = response.data.data.records[0].id;

// Upload file in Node.JS

const request = await FilesApiFp(configuration).uploadFile("self",
  fs.createReadStream("./test/sample.pdf")
);

const response = await request(axios);

// Send fax

```

## Documentation
Visit the full API reference at [apidoc.fax.plus](https://apidoc.fax.plus).

## Author
© 2021 Alohi (Geneva, Switzerland) - [Alohi.com](https://alohi.com)
