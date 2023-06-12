# pull the Node.js Docker image
# FROM node:latest

# create the directory inside the container
# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# WORKDIR /home/node/app

# copy the package.json files from local machine to the workdir in container
# COPY --chown=node:node package*.json ./

# Copiar tsconfig.json
#COPY tsconfig.json ./


# run npm install in our local machine
#RUN npm install

# Compilar la aplicación
#RUN npm run build

# copy the generated modules and all other files to the container
#COPY --chown=node:node . .
#COPY /home/node/app/dist ./dist/

#USER node

# our app is running on port 3000 within the container, so need to expose it
#EXPOSE 3009

# the command that starts our app
#ENTRYPOINT [ "node", "index.js", ]
#CMD ["npm", "run", "start:prod"]

FROM node:latest
WORKDIR /home/node/app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:latest
COPY --from=builder /home/node/app/node_modules ./node_modules/
COPY --from=builder /home/node/app/package*.json ./
COPY --from=builder /home/node/app/dist ./dist/
COPY --from=builder /home/node/app/tsconfig.json ./
EXPOSE 5273
CMD ["npm", "run", "start:prod"]