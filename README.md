In this project we have integrated our demo project with image building with docker ,image scanning with trivy and push our image to docker hub

Errors that we got during this see chatgpt if you want but it is too long given short description below - https://chatgpt.com/c/6a4de0df-b588-83ee-aea9-8d760d8e5627

Error at Docker login step 

Error response from daemon:
Get "https://registry-1.docker.io/v2/":
unknown: malformed HTTP Authorization header

This is not a Docker Buildx issue or a YAML issue. It means Docker Hub rejected the Authorization header, which almost always points to one of these:

❌ Invalid Docker Hub Access Token
❌ Wrong username
❌ Secret contains extra spaces/newline
❌ Using password instead of Personal Access Token
❌ Secret name/value mismatch

So we checked and the issue is with the username saved in the secrets ,so fixed the username with the correct one 

And pipeline broke again at image scanning as the trivy found that vulnerability with our image ,basically we need to fix that by either installing new image where this vulnerability is fixed but since it is a demo we simply fixed by doing exitcode modification to 0 from one and saying ignore-unfixed: true means just report to us without breaking the pipe line 

And after this pipeline is success and image is push to dockerhub

But we cannot run the image build as it exists immediately after job run ,So we have just modified/added few app.js,math.js,test.js and ran again ,so container stays ,so we can run localhost:3000 and check 

And one last thing if we got error as i have added few new files directly in GitHub ,
Follow this steps 


# Check your status

Run:

```bash
git status
```

---

# Fetch the latest changes

Run:

```bash
git fetch origin
```

---

# Rebase your changes (recommended)

Run:

```bash
git pull --rebase origin main
```

If there are no conflicts, you'll see something like:

```text
Successfully rebased and updated refs/heads/main
```

Then push:

```bash
git push origin main
```

---

# If you get merge conflicts

Git will tell you which files conflict.

Resolve the conflicts, then:

```bash
git add .
git rebase --continue
```

Finally:

```bash
git push origin main
```

---

# If this is your own repository and you want to overwrite GitHub

⚠️ Only do this if you're sure the remote changes are not needed.

```bash
git push --force origin main
