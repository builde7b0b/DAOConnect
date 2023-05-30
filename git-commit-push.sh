#!/bin/bash

# Prompt for a custom commit message
read -p "Enter commit message: " commit_message

read -p "Enter branch origin: " commit_branch

# Function to execute Git commands with error handling
function execute_git_command() {
    "$@"
    local status=$?
    if [ $status -ne 0 ]; then
        echo "Error executing Git command: $1"
        exit $status
    fi
}

# Execute the Git commands
execute_git_command git add .
execute_git_command git commit -m "$commit_message"
execute_git_command git push origin "$commit_branch"
