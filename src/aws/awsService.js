import { S3 } from 'aws-sdk';

// Cấu hình AWS S3
const s3 = new S3({
    accessKeyId: 'your_access_key_id_here',
    secretAccessKey: 'your_secret_access_key_here',
    region: 'ap-southeast-2',
});

const uploadVideoToS3 = async (fileName, filePath) => {
    const params = {
        Bucket: 'myfordancebucket',
        Key: 'videos/' + fileName,
        Body: filePath,
        ContentType: 'video/mp4',
    };

    return s3.upload(params).promise();
};

const uploadImageToS3 = async (fileName, filePath) => {
    const params = {
        Bucket: 'myfordancebucket',
        Key: 'images/' + fileName,
        Body: filePath,
        // ContentType: 'image/jpeg', // Thay đổi ContentType tùy thuộc vào định dạng hình ảnh
    };

    return s3.upload(params).promise();
};


export { uploadVideoToS3, uploadImageToS3 };
