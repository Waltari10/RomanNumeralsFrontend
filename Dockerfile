FROM node:10
# Create app directory
WORKDIR /usr/src/app
COPY . .

RUN npm ci
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "serve:build" ]