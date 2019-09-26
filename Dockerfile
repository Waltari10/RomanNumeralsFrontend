FROM node:10
# Create app directory
WORKDIR /usr/src/app
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "serve:build" ]