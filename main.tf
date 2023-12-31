terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "recipeRevive" {
  name      = "terraform-project"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "azuhayer/Recipe-Revive"
  }
}