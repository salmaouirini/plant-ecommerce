# Use an official Node.js runtime as a parent image
FROM node:14 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Serve the application using a lightweight server
FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Command to run the app
CMD ["nginx", "-g", "daemon off;"]
