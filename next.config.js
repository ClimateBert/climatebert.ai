const { withSentryConfig } = require("@sentry/nextjs")

const nextConfig = {}

const sentryConfig = {
  silent: true, // Suppresses all logs
}

module.exports = withSentryConfig(nextConfig, sentryConfig)
