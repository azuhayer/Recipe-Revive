terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "terraform" {
  name      = "terraform-project"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "JohnsonChen22002/Recipe-Revive"
  }
}