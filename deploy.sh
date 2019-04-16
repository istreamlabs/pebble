S3_BUCKET_NAME=$1

if [[ ! -z "$2" ]]; then
  export AWS_ACCESS_KEY_ID=$2
fi

if [[ ! -z "$3" ]]; then
  export AWS_SECRET_ACCESS_KEY=$3
fi

if [ -z "$S3_BUCKET_NAME" ]; then
  echo "ERROR: You must pass the name of the bucket where you want the build to be uploaded."
  exit 1
fi

if [ -z "$AWS_ACCESS_KEY_ID" ]; then
  echo "no env varible 'AWS_ACCESS_KEY_ID' set and was not passed as second parameter, aws cli will default to config flie. see: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html"
fi

if [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
  echo "no env varible 'AWS_SECRET_ACCESS_KEY' set and was not passed as third parameter, aws cli will default to config flie. see: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html"
fi

# set up defaults
export AWS_DEFAULT_REGION=us-west-2
export AWS_DEFAULT_OUTPUT=json

echo "Uploading files to $S3_BUCKET_NAME..."
aws s3 sync styleguide s3://$S3_BUCKET_NAME/ \
  --cache-control max-age=2592000 \
  --exclude service-worker.js \
  --exclude index.html

rc=$?; if [[ $rc != 0 ]]; then exit $rc; fi

  # Upload service-worker.js with directive to not cache it
echo "Uploading service-worker.js"
aws s3 cp styleguide/service-worker.js s3://$S3_BUCKET_NAME/service-worker.js \
  --metadata-directive REPLACE \
  --cache-control max-age=0,must-revalidate \
  --content-type application/javascript

rc=$?; if [[ $rc != 0 ]]; then exit $rc; fi

# Upload index.html
echo "Uploading index.html"
aws s3 cp styleguide/index.html s3://$S3_BUCKET_NAME/index.html \
  --metadata-directive REPLACE \
  --cache-control max-age=0,must-revalidate \
  --content-type text/html

rc=$?; if [[ $rc != 0 ]]; then exit $rc; fi
