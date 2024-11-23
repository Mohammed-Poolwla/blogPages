// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cloudinary = require('cloudinary').v2;


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
const uploadImage = async (b64, name) => {
    
    const buffer = `data:image/png;base64,${b64}`;
    // console.log('buffer', buffer)
    // Upload an image
    const uploadResult = await cloudinary.uploader
    .upload(buffer, {
            public_id: name,
            folder: 'blogs',
            format: 'webp' 
        }
    )
    .catch((error) => {
        console.log(error);
    });
    return uploadResult;

}

module.exports = uploadImage
