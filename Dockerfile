FROM node:18-alpine

ENV PROJECT_DIR=/app

WORKDIR ${PROJECT_DIR}

COPY package.json .

RUN yarn install

COPY . .

CMD ["yarn", "run", "dev", "--host"]