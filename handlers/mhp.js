const { getFeed } = require('../lib/mhp')

module.exports.handler = (event, context, callback) =>
  getFeed()
    .then(xml =>
      callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/rss+xml; charset=utf-8',
        },
        body: xml,
      })
    )
    .catch(callback)
