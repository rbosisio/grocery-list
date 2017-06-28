FROM node:alpine

COPY . /var/grocery-list

# RUN apk add --update nodejs nodejs-npm
RUN cd /var/grocery-list && npm install 
# RUN npm install -g nodemon

EXPOSE 8000

CMD ["node", "/var/grocery-list/app.js"]
#CMD ["npm", "start"]