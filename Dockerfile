
# Stage 1: Build & Development Dependencies
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Install all dependencies (including devDependencies)
RUN npm ci
COPY . .

# Stage 2: Minimal Production Runner
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
# Install ONLY production dependencies to keep the image secure and small
RUN npm ci --only=production
# Copy only the necessary files from the builder stage
COPY --from=builder /app/src ./src

EXPOSE 3000
CMD ["node", "src/index.js"]
