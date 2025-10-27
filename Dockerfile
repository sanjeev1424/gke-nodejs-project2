# Use a small official Node base image
FROM node:18-bullseye-slim


# Create app directory
WORKDIR /usr/src/app


# Copy package files first for better layer caching
COPY package.json package-lock.json* ./


# Install deps
RUN npm ci --only=production


# Copy app source
COPY . .


# Expose port
EXPOSE 8080


# Start
CMD ["node","app.js"]