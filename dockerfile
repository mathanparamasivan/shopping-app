# Step 1: Build the Angular app
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production --output-path=dist

# Step 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app to Nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if you have one
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
