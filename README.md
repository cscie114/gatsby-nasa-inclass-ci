# Gatsby Nasa Example

This is an example using [Gatsby](https://www.gatsbyjs.com/) with sample JSON data from [NASA's Astronomy Picture of the Day (APOD) API](https://api.nasa.gov/).

Key features:
- Uses [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/) and [gatsby-transformer-json](https://www.gatsbyjs.com/plugins/gatsby-transformer-json/) to parse local JSON data.
- Creates pages programmatically using Gatsby's [createPage()](https://www.gatsbyjs.com/docs/reference/config-files/actions/#createPage) function in `gatsby-node.js`.
- Implements basic pagination in `gatsby-node.js`.
- Uses components to render image and video media types.


## Quickstart

```sh
npm install
npm run develop
```

Then visit http://localhost:8000/

## Refreshing the data

A snapshot of the data is stored locally and then sourced by Gatsby.

To refresh the data:

```sh
export NASA_API_KEY="your_api_key"
export START_DATE=2023-01-01
export END_DATE=$(date +%Y-%m-%d)

curl -s "https://api.nasa.gov/planetary/apod?api_key=$NASA_API_KEY&start_date=$START_DATE&end_date=$END_DATE" | python3 -m json.tool >data/nasa.json
```
