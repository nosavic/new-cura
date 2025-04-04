# Simple Guide on how to Fork, Clone, Fetch Upstream, Update Local Branches, and Open a Pull Request

Follow the steps below to have the latest changes on your local machine
1. **Fork** the Curamap Repository
![fork](https://github.com/user-attachments/assets/1322a41a-5993-4f35-bdf2-ea5e61043ced)

2. Name and Create the forked repository
   - name the repository
   - uncheck the **Copy the main branch only** checkbox
   - click on **Create fork**
![fork 2](https://github.com/user-attachments/assets/8f3cf68d-5f69-48b9-b88f-40028ccc0bca)
You've sucessfully forked the Curamap repository
3. To clone your forked repository to your local machine
   - Since developers are working with the **development** branch and it has the latest code, change the branch to **development** to see the latest code.
   - Click on **Code**
   - Click on the *copy* symbol to copy your repository url
![change branch to dev and copy the url](https://github.com/user-attachments/assets/6078d979-e35d-4b65-97c3-b4f3db38b85c)
##### Go to your terminal or Open terminal in your VS Code and input the following commands:
     git clone <paste-the-url-you-copied>
e.g. `git clone https://github.com/bahseet-altschool/curamapCodes`
##### Add Curamap as the remote upstream
     git remote add upstream https://github.com/Curamap/Codes.git
##### To see the list of remotes (optional)
     git remote -v
##### Fetch the Upstream
     git fetch upstream
##### Update local branches using rebase
     git checkout main
     git rebase upstream/development
## *Your local is successfully updated*, and you can create the branch you want, write your codes, and all other things you want

Once you're done writing your codes,
##### commit the changes
     git add .
     git commit -m "<write-a-clear-message-on-what-you-work-on>"
e.g. `git commit -m "I updated this guide"`
##### push the changes back to your forked repository
     git push origin <the-branch-you-worked-with>
e.g. `git push origin dev`

---
## Opening a Pull Request
Go to your github account
1. A notification will appear, click on **Compare & pull request**
![14 compare and pull request](https://github.com/user-attachments/assets/13031b95-3ec3-40c1-b2f1-9f126957b699)
2. Change the **base** branch to **development**, and the **compare** branch to the branch you worked with
![15i creating a pull request](https://github.com/user-attachments/assets/29753c4c-0dd7-4d44-a359-ba4bf2dd5ec4)
3. Click on **Create pull request**
![15ii](https://github.com/user-attachments/assets/744b3e67-385c-4afb-aa6c-cc5d0c75fc99)

## You've successfully created a pull request
