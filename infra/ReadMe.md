## What is this?

Hey this is just the basic terraform for a s3 bucket mapped to Cloufront.
This is intended for a static site, so CF will cache the contents until an invalidation fires. The cache gets invalidated by the github action on deploy.
