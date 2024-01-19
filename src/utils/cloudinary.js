import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"

const uploadOnCLoudinary = async(localFilePath) => {
    try{
        if(!localFilePath) return null

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })

        console.log("file is uploaded on cloudinary" , response.url);

        return response;

        
    }catch(error){
        fs.unlinkSync(localFilePath) //remove the file from the server as upload operation got failed
        
    }
}


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export {uploadOnCLoudinary}