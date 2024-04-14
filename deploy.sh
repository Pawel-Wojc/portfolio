echo "Switching to branch master"
git checkout main

echo "Building app..."



echo "Deploying files to server..."

scp -r out/* serwer:/var/www/pawel-wojcik.pl/

echo "Done"