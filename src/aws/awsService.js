import {S3} from 'aws-sdk';
import {AWS_S3_ACCESS_KEY_ID, AWS_S3_SECRET_ACCESS_KEY} from '@env';

// Cấu hình AWS S3
const s3 = new S3({
  accessKeyId: AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: AWS_S3_SECRET_ACCESS_KEY,
  region: 'ap-southeast-1',
});

const Bucket = 'fordance';

const uploadVideoToS3 = async (fileName, filePath) => {
  const Key = 'videos/' + fileName;
  const params = {
    Bucket,
    Key,
    Body: filePath,
    ContentType: 'video/mp4',
    ACL: 'public-read',
  };

  await s3.upload(params).promise();
  return `https://${Bucket}.s3.ap-southeast-1.amazonaws.com/${encodeURIComponent(
    Key,
  )}`;
};

const uploadImageToS3 = async (fileName, filePath) => {
  const Key = 'images/' + fileName;
  const params = {
    Bucket,
    Key,
    Body: filePath,
    // ContentType: 'image/jpeg', // Thay đổi ContentType tùy thuộc vào định dạng hình ảnh
  };

  await s3.upload(params).promise();
  return `https://${Bucket}.s3.amazonaws.com/${encodeURIComponent(Key)}`;
};

export {uploadVideoToS3, uploadImageToS3};
