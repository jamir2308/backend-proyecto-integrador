# pull the Node.js Docker image
FROM node:latest

# create the directory inside the container
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

# copy the package.json files from local machine to the workdir in container
COPY --chown=node:node package*.json ./

# Copiar tsconfig.json
COPY --from=builder /app/node_modules ./node_modules/
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist/
COPY --from=builder /app/protos ./protos/
COPY --from=builder /app/tsconfig.build.json ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/prisma ./prisma/

# run npm install in our local machine
RUN npm install

# Compilar la aplicación
RUN npm run build

# copy the generated modules and all other files to the container
COPY --chown=node:node . .

USER node

# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3009

# the command that starts our app
#ENTRYPOINT [ "node", "index.js", ]
CMD ["npm", "run", "start:prod"]