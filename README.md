# Upstash kafka rest UI

This is a simple ui for kafka hosted on upstash

# Features

- Manage multiple clusters
- Visualize topics, partitions and messages
- Produce new messages
- Only encrypted data stored. Your connection details are de/encrypted inside
  the browser.
- Requests to upstash are sent directly from the browser, not proxied by a
  backend.
- Secure authentication using [auth0](https://auth0.com)
- Zero ops, using upstash and this allows you use and observe kafka without
  managing anything.

# Quickstart

1. Visit [https://upstash-ui.vercel.app](https://upstash-ui.vercel.app) and log
   in
2. Go to [/settings](https://upstash-ui.vercel.app/settings) and create an
   encryption key
3. Go to [/cluster](https://upstash-ui.vercel.app/cluster) and add your clusters

# Roadmap

This is ready for myself to use and has almost reached the limits of the upstash
kafka rest api. There are lots of unpolished edges and the user experience is
admitedly not great. The thing is that this will probably be obsolete at some
time when upstash create an official ui, so I would rather spend my time
building longer lasting things.

# Codebase

This is a proof of concept.

The code quality is rather poor, I copied stuff together from older projects to
build it fast. But I hope you can find what you are looking for.
