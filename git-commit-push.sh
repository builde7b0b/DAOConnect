#!/bin/bash

# Prompt for a custom commit message
read -p "Enter commit message: " commit_message

# Execute the Git commands
git add .
git commit -m "$commit_message"
git push
