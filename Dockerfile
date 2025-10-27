# Use a lightweight Node.js base image
FROM node:18-bullseye-slim

# Set working directory
WORKDIR /usr/src/app

# Copy dependency files first for caching
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production && npm cache clean --force

# Alternative way (no lockfile)
# RUN npm install --omit=dev && npm cache clean --force
# Copy app source
COPY . .

# Ensure non-root user (best practice for security)
USER node

# Expose port 8080
EXPOSE 8080

# Start the app
CMD ["node", "app.js"]
