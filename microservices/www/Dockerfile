FROM node:6

#Install deps
RUN npm install -g http-server
RUN mkdir /src
COPY package.json /src/package.json

WORKDIR /src

#Add all source code
ADD . . 

# Execute build
RUN ng build 

#Default command
CMD ["/src/runserver.sh"]
