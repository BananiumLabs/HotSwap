FROM node:6

#Install deps
RUN npm install -g http-server
RUN mkdir /app
COPY package.json /app/package.json

WORKDIR /app

RUN npm install

#Add all source code
ADD . . 

# Execute build
RUN ng build 

#Default command
CMD ["/app/runserver.sh"]
