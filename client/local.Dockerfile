FROM node:10.9.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && npm config set "//npm.fontawesome.com/:_authToken" D96E26C0-D385-477F-A918-5ACD66AE1214
RUN npm ci
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve"]
