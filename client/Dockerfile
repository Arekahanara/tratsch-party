# build stage
FROM node:10.9.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && npm config set "//npm.fontawesome.com/:_authToken" D96E26C0-D385-477F-A918-5ACD66AE1214
RUN npm ci
COPY . .
ARG commitHash
ENV VUE_APP_COMMIT_HASH $commitHash
RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
