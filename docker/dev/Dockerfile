FROM node:14-alpine

RUN mkdir -p /usr/src/app
RUN apk add --no-cache libc6-compat bash git python make g++
ENV NODE_ENV development

RUN node -v
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
# install Firebase CLI Tools
RUN npm install -g firebase-tools
RUN npm install

COPY . /usr/src/app

RUN npm run build
EXPOSE 3000
CMD "npm" "run" "dev"

