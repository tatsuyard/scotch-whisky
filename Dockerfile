FROM node:14-alpine

RUN mkdir -p /usr/src/app
RUN apk add --no-cache libc6-compat bash
ENV NODE_ENV development

RUN node -v
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN npm install
#COPY yarn.lock /usr/src/app
COPY . /usr/src/app
RUN ls -l

#RUN yarn install
RUN npm run build
EXPOSE 3000
CMD "npm" "run" "dev"

