https://www.youtube.com/watch?v=HtWgb_vbyvY
https://www.udemy.com/course/learn-aws-ec2-with-best-practices/learn/lecture/33093552#overview


1. Grant user full EC2 access (temporarily) ----> AWS admin must do this step
Steps : Go to Users page -> select the user -> in the permissions tab, click on add permissions -> choose the "Attach existing policies directly" option -> in the search bar, type in EC2 -> scroll down and find "AmazonEC2FullAccess" option -> click the on check box next to that option -> Click on the next review button


2. Launch new instance
3. Select Ubuntu
4. Auto-assign public IP set it to Enable
5. Can use the defualt storage option: 8GiB gp2
6. Create security key and save it (somewhere secure?)
6. Add the following security groups stuff

7. Connect to instance
	Open an SSH client.

	Locate your private key file. The key used to launch this instance is <private_key_file_name>.pem

	Run this command, if necessary, to ensure your key is not publicly viewable.
 		chmod 400 <private_key_file_name>.pem

	Connect to your instance using its Public DNS:
 		<ec2 domain>

	Example:
 		ssh -i "<private_key_file_name>.pem" ubuntu@<ec2 domain>

8. Set up file directory
	webapp folder
		build
		backend
		server_logs
		
9. Install NodeJS
	curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
	sudo apt-get install -y nodejs
	sudo npm install npm -g

10. Install Nginx for frontend server CI/CD
	sudo apt update
	sudo apt install nginx

10. Install pm2 for backend server CI/CD
	sudo npm install pm2 -g

11. Set up Nginx configurations
	cd /etc/nginx
	sudo vi nginx.conf 
-------------------------------------
user ubuntu;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    client_body_buffer_size 100k;
    client_header_buffer_size 1k;
    client_max_body_size 100k;
    large_client_header_buffers 2 1k;
    client_body_timeout 10;
    client_header_timeout 10;
    keepalive_timeout 5 5;
    send_timeout 10;
    server_tokens off;
    #gzip  on; on;

    include /etc/nginx/conf.d/*.conf;
}
----------------------------------------------------
	
	
	cd /etc/nginx/conf.d/
	sudo vi default.conf

---------------------------
server {
        #listen       80;
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name arcsecurity.co www.arcsecurity.co

        access_log /home/ubuntu/webapp/server_logs/host.access.log main;

        location / {
                root   /home/ubuntu/webapp/build;
                index  index.html index.htm;
                try_files $uri /index.html;
                add_header X-Frame-Options SAMEORIGIN;
                add_header X-Content-Type-Options nosniff;
                add_header X-XSS-Protection "1; mode=block";
                add_header Strict-Transport-Security "max-age=31536000; includeSubdomains;";
                                                                                                                                                                        }

        location /api {
                proxy_pass http://127.0.0.1:5001/api;
        }

        error_page 405 =200 $uri;
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
                root   /usr/share/nginx/html;
        }

        server_tokens off;

        location ~ /\.ht {
                deny  all;
        }
}
---------------------------------------------------------


14. Add backend api keys to config.js and create build file for frontend
	Modify server.js to import config 

15. Start nginx server and pm2 server
	sudo service nginx start
	sudo service nginx stop
	sudo service nginx restart
	sudo service nginx status

	sudo pm2 start webapp/backend/server.js (the path to server.js)
	
	sudo pm2 status	






SSL Certificate
https://certbot.eff.org/instructions
https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal

1. Install snapd (most likely already installed on ubuntu)
2. Check for latest version of snapd
	sudo snap install core; sudo snap refresh core

3. Remove certbot-auto and any Certbot OS packages
	sudo apt-get remove certbot

4. Install certbot
	sudo snap install --classic certbot

5. Prepare the Certbot command
	sudo ln -s /snap/bin/certbot /usr/bin/certbot

6. Get and install certificates
	sudo certbot --nginx --test-cert (to test it out, it won't actually allow HTTPS but will show that certbot is working when you open up the domain)

	sudo certbot --nginx (if ran above command, then it will ask if you want to renew, say yes ---> then website will work )

	Both these command will ask for email address, domain names, and permission to share email address with the Electronic Frontier Foundation, a founding member of the Let's Encrypt foundation and the non-profit organization behind Certbot? 


7. Test automatic renewal
	sudo certbot renew --dry-run
