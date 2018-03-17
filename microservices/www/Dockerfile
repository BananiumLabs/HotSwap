FROM node:6

#Install deps
RUN npm install -g http-server
RUN mkdir /src
COPY package.json /src/package.json

WORKDIR /src
RUN npm install
RUN npm install -g @angular/cli

#Add all source code
ADD . /src

# Execute build
RUN ng build 

#Default command
CMD ["/src/runserver.sh"]
