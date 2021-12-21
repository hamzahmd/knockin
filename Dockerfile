FROM node:14.16.1

WORKDIR /usr/src/mydividendtracker/app

RUN npm ci --only=production

RUN npm run build

# start services
CMD ["npm", "run", "start"]
