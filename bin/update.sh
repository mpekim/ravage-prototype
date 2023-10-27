echo "Starting auto-commit/push."

remote_name = "origin"
branch_name = "main"

git add .
echo "Files Added."

git commit -m "Auto-commit done using update.sh script."
echo "Successful commit."

git pull $remote_name $branch_name
git push $remote_name $branch_name
echo "Successful push. Auto-commit/push complete."