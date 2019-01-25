## LOCAL DEVELOPMENT
##### Run the Client/UI
 client -> ```npm run start:dev```
 
##### Run the Server/API
 root -> ```npm start```
 
 **Note**: We use SSR, but not really good for local DEV as we do not have autoreload in place
 
- create Configs

``````
/config/DEV.json


{
  "env": "DEV",
  "port": 3001
}

``````

``````
/client/config/DEV.json`

{
  "env": "DEV",
  "port": 3000
}
``````