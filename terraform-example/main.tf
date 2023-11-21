terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}
resource "vercel_project" "example" {
  name      = "recipe-revive"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "FreshPineapple-jpg/Recipe-Revive"
  }
}
provider "vercel" {
  api_token = "NEXT_PUBLIC_VERCEL_KEY"
}
