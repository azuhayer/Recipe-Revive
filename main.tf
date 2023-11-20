terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "vercelTerraform" {
  name      = "terraform-test-project"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "NikhilPrajith/Recipe-Revive"
  }
}