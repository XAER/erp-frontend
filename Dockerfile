FROM node:18-alpine

ENV PROJECT_DIR=/app

WORKDIR ${PROJECT_DIR}

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000
CMD ["yarn", "run", "dev"]