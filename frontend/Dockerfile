# Use Node.js base image
FROM node:22

# Set working directory
WORKDIR /frontend

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

#Copy all the frontend files
COPY . .

# Expose the port Vite runs on
EXPOSE 5173

# Start Vite in dev mode (for development)
CMD ["npm", "run", "dev", "--", "--host"]



