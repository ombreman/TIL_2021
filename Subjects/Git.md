## How to use Git well

### How to clone just one specific branch

$ git clone -b {branch name} --single-branch {repository URL}

### How to push from local to github

$ git remote -v

<!-- to check whether you have connected your local to a github repository -->
<!-- if there is nothing connected, -->

$ git remote add origin "github url"
$ git remote -v

<!-- if two cmd lines come out, -->

$ git push origin master

<!-- do the same process from scratch below if an error is thrown -->

$ git add .
$ git commit -m "commit message"
$ git push origin master
$ git remote

### How to connect a local folder to a remote repository

$ git remote add origin https://repository.git
$ git push -u origin master
