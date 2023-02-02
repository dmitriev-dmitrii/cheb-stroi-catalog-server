

import swaggerAutogen from 'swagger-autogen';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

// https://github.com/davibaltar/swagger-autogen

const description = {
    info: {
        title: 'csy-catalog-api',
        description: 'csy-catalog-server'
    },


    schemes: ['http']
}

const descriptionFileName  = 'swagger-api-docs.json'
const descriptionFilePath = './swagger/'+descriptionFileName
const endpointsFiles = ['../src/routes/index.js']

let   isFailedBuild = false

const  buildSwaggerDocs = async (host) => {
    try {

        description.host = host;

        console.log( `build ${descriptionFileName} : loading... `)
        await swaggerAutogen (descriptionFilePath, endpointsFiles, description);
        console.log( `build ${descriptionFileName} : success `)
        isFailedBuild = false
    }catch (err) {

        isFailedBuild = true
        const errMsg = `build ${descriptionFileName} : failed`
        console.error(errMsg)

        return  new Error( errMsg,{ cause : err } )
    }
}

 async function initSwaggerDocumentation (app,host) {

    try {
        await  buildSwaggerDocs (host);
        let descriptionsData = await fs.promises.readFile( descriptionFilePath );

        app.use('/', swaggerUi.serve, swaggerUi.setup(  JSON.parse( descriptionsData ) ))

    } catch (err) {


        if ( err.code === 'ENOENT' && !isFailedBuild) {

            console.warn(`cant find  ${descriptionFilePath}, try build...`)
            await  buildSwaggerDocs ();
            await  initSwaggerDocumentation(app);
            return
        }

        console.log(err)
        app.get('/', function(req, res){
            res.send({ title: `build ${descriptionFileName} : failed `}  );
        });
    }
}

export default initSwaggerDocumentation