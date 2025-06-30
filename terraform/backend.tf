terraform {
backend "s3" {
bucket     = "stocks-ui-vue-webapp"
key        = "terraform.tfstate"
region     = var.region
access_key = var.access_key
secret_key = var.secret_key
}
}