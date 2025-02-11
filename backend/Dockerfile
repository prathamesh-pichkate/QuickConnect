# Use a lightweight Node.js image
FROM node:22

# Set working directory
WORKDIR /backend

# Copy package.json and package-lock.json first (for better caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the backend files
COPY . .

# Expose port 5000
EXPOSE 5001


# Start the backend
CMD ["node", "./src/index.js"]
