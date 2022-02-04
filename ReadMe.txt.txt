npm run serve



---------------------------- SOME OTHER USERFULL COMMANDS --------------------------------

npm run build

> then copy the dist folder contents to a location on server and then update the nginx configuration:


gunicorn --workers=2 --bind=0.0.0.0:8000 hello.wsgi:application