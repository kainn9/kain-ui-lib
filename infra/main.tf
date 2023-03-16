provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "ui_lib" {
  bucket = "kain-ui-lib"
  acl    = "private"

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket_policy" "ui_lib" {
  bucket = aws_s3_bucket.ui_lib.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid = "Allow CloudFront access to S3 bucket"
        Effect = "Allow"
        Principal = {
          AWS = "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${aws_cloudfront_origin_access_identity.ui_lib.iam_arn}"
        }
        Action = "s3:GetObject"
        Resource = "arn:aws:s3:::kain-ui-lib/*"
      },
    ]
  })
}

resource "aws_cloudfront_origin_access_identity" "ui_lib" {
  comment = "Allows access to the ui-lib S3 bucket only from CloudFront"

  depends_on = [aws_s3_bucket.ui_lib]

}

resource "aws_cloudfront_distribution" "ui_lib" {

  restrictions {
      geo_restriction {
        restriction_type = "none"
      }
    }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  origin {
    domain_name = "${aws_s3_bucket.ui_lib.bucket_domain_name}"
    origin_id   = "S3-UI-Lib"

    s3_origin_config {
      origin_access_identity = "${aws_cloudfront_origin_access_identity.ui_lib.cloudfront_access_identity_path}"
    }
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-UI-Lib"
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    // cache until invalidation
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 315569520
    max_ttl                = 315569520
  }

  enabled             = true
  is_ipv6_enabled     = true
  price_class         = "PriceClass_All"
  default_root_object = "index.html"

  tags = {
    Name = "ui-lib-cloudfront-distribution"
  }
}

