FROM node:15.0.1-alpine
WORKDIR /app/react

COPY package.json package-lock.json ./
RUN npm install 
RUN npm install react-scripts@5.0.0 -g 
COPY . ./
EXPOSE 3000

