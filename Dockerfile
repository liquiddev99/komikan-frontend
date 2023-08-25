#Build stage
FROM node:18.17.1-alpine3.17 as builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

# Run stage
FROM node:18.17.1-alpine3.17 as production
WORKDIR /app
COPY --from=builder /app/package*.json .
COPY --from=builder /app/next.config.js .
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static ./.next/static
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.js"]
