FROM node:10.24.1-alpine
ENV TZ=Europe/Berlin
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3030
CMD ["npm", "start"]
