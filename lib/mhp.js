const rp = require('request-promise')
const cheerio = require('cheerio')

const removeVideo = $ => {
  $('enclosure')
    .filter((i, e) =>
      $(e)
        .attr('type')
        .includes('video')
    )
    .parent('item')
    .remove()

  return $
}

export const getFeed = () =>
  rp
    .get({
      uri: 'http://mobilehomeparkinvestors.libsyn.com/rss',
      transform: body => cheerio.load(body, { xmlMode: true }),
    })
    .then(removeVideo)
    .then($ => $.xml())
