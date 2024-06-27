# Use the official Bun image
FROM oven/bun:1

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb to the container
COPY package.json bun.lockb ./

# Install all dependencies (including dev dependencies)
RUN bun install

# Copy the application files to the container
COPY . .

# Set environment variables
ENV NODE_ENV development
ENV PORT 3001
ENV HOST 0.0.0.0

# Expose the application port
EXPOSE 3001

# Command to run the application in development mode
CMD ["bun", "run", "dev"]