terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}
resource "vercel_project" "example" {
  name      = "hw10"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "Chr1sZzz/Recipe-Revive"
  }
}