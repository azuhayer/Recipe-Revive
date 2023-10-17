# Recipe-Revive
CSC 45600 Project

Collaborators: 
- Zuhayer Alvi (Product manager)
- Riaz Ahmed (Technical Program Manager)
- Johnson Chen (Code Reviewer)
- Nikhil P (DevOps Engineer)
- Zhuowen Zhong (Test Engineer)
- Kazi Sadman (Architect)

### Create branch

If you didn't fork and will be using the main repo, use branches. (Essentially making a separate folder so it does not interfere with main branch)

To create a new branch: 
- Run `git branch your-branch`
- Checkout into that branch, `git checkout your-branch`

OR
- Run 'git checkout -b your-branch' to make the branch and switch to it

### Pushing

- Add your changes, run `git add .`
- If you want to add only particular changes then 'git add file-name'

OR

- Use 'git add -i' for an interactive way to select files to commit
  
- Commit your changes `git commit -m "commit-message"` (Note: the message after -m must be in quotes so it is read as a string)
- To push run, `git push origin your-branch-name`
