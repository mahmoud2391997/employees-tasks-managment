FROM node:22-bookworm-slim AS builder
ENV COREPACK_HOME=/opt/corepack
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/* && corepack enable
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm -C packages/workforce-database generate
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm test && pnpm -C apps/workforce build
FROM node:22-bookworm-slim AS runner
ENV COREPACK_HOME=/opt/corepack
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/* && corepack enable
COPY --from=builder --chown=node:node /opt/corepack /opt/corepack
COPY --from=builder --chown=node:node /app /app
ENV NODE_ENV=production WORKFORCE_DEMO_MODE=false DEMO_MODE=off HOSTNAME=0.0.0.0
USER node
EXPOSE 3000
CMD ["pnpm", "-C", "apps/workforce", "exec", "next", "start", "--hostname", "0.0.0.0", "--port", "3000"]
