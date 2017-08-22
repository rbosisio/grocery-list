FROM node:alpine

COPY . /var/list-hero

# RUN apk add --update nodejs nodejs-npm
RUN cd /var/list-hero && npm install
# RUN npm install -g nodemon

EXPOSE 8000

CMD ["node", "/var/list-hero/app.js"]
#CMD ["npm", "start"]