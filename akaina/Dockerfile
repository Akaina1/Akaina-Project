# Base stage
FROM oven/bun:1 as base

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .

# Build stage for production
FROM base as build

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN if [ "$NODE_ENV" = "production" ]; then bun next build; fi

# Final stage
FROM oven/bun:1 as final

WORKDIR /app

COPY --from=base /app /app

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Temporary command to check the .next directory
CMD ["ls", "-la", ".next"]