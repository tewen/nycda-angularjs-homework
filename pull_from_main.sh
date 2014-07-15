#!/bin/sh

{
    git remote add upstream https://github.com/tewen/nycda-angularjs-homework.git
} || {
    echo "Remote already added"
}

git fetch upstream
git merge upstream/master