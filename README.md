# On the server
## Preperation
### Install nginx

```bash
sudo apt update
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Prepare the directories

```bash
sudo mkdir -p /var/www/hm25
sudo chown -R www-data:www-data /var/www/hm25
sudo chmod -R 755 /var/www/hm25
```

# On your local machine
## HM25 Repo

### Prerequisites

#### Install git and culr
```bash
sudo apt install git
sudo apt install curl
```

#### Install pnpm
For latest version, please refer to [https://github.com/nvm-sh/nvm/releases](https://github.com/nvm-sh/nvm/releases)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

then

```bash
source ~/.bashrc
nvm install --lts
curl -fsSL https://get.pnpm.io/install.sh | sh -
source ~/.bashrc
```

verify installation

```bash
pnpm -v
```

### Fetch code
```bash
git clone https://github.com/icyblob/hm25-frontend
```

### Install dependencies
```bash
pnpm install
```

### Build
```bash
REACT_APP_HTTP_ENDPOINT=http://<server_ip> pnpm build
```

Add your `<server_ip>` in the command to set the `REACT_APP_HTTP_ENDPOINT` in [this file](https://github.com/icyblob/hm25-frontend/blob/main/src/contexts/ConfigContext.jsx#L20)

If no errors, it's ready for the deployment

### Transfer your files to the server

Use either `scp` or `rsync`

#### Use `scp`

```bash
# At the HM25 repo's root directory
scp -r build/* user@your_server_ip:/var/www/hm25
```

#### Use `rsync`

```bash
rsync -avzHit build/* user@your_server_ip:/var/www/hm25
```

# Back to your server
## Configure `nginx`

```bash
sudo vim /etc/nginx/sites-available/hm25
```

Copy the below
```
server {
    listen 8081;
    server_name <your_server_ip>;

    root /var/www/hm25;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Create symlink
```bash
# Remove sites default
rm /etc/nginx/sites-available/default
rm /etc/nginx/sites-enabled/default
# Enable the current config
sudo ln -s /etc/nginx/sites-available/hm25 /etc/nginx/sites-enabled/
```

## Test and load
```bash
sudo nginx -t
# If it shows 
# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful
# then go ahead with this command
sudo systemctl reload nginx
```

Open the app through http://<your_server_ip>:8081

# Connect to core node server
If you have already launched the node with <node_ip>, try to connect it with our frontend. Open the Lock/Unlock icon at the top right of the app, select `Connect to Server`, then add your node url:
```
http://<node_ip>
```

Then refresh the page
