#!/bin/bash

# Prompt for a custom commit message
read -p "Enter commit message: " commit_message
read -p "Enter branch origin: " commit_branch

# Execute the Git commands
git add .
git commit -m "$commit_message"
git push origin "$commit_branch"
