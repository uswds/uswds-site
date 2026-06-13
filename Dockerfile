# Use a slim Ruby image as the base
FROM ruby:3.2.7-slim

# Set environment variables for UTF-8 encoding and non-interactive package installation
ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    DEBIAN_FRONTEND=noninteractive

# Get NodeJS
COPY --from=node:20-slim /usr/local/bin /usr/local/bin

# Get npm
COPY --from=node:20-slim /usr/local/lib/node_modules /usr/local/lib/node_modules

# Install essential build tools and dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the Gemfile and Gemfile.lock
COPY Gemfile* ./

# Install Bundler and project dependencies
RUN gem install bundler && bundle install

COPY package.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose port 4000
EXPOSE 4000

# Start the Jekyll development server with live reloading
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch"]
