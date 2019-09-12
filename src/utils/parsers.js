export const withTwitterHashtags = (s) =>
s.replace(/[#]+[A-Za-z0-9-_]+/g, x =>
  x.link(`https://twitter.com/hashtag/${x.replace('#', '')}?src=hash`)
);

export const withEmbebbedUrls = (str) => (
  str.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, u =>
    u.link(u)
  )
)