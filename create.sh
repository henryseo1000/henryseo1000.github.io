#!/bin/zsh

mkdir $1
mkdir $1/css
mkdir $1/js
mkdir $1/assets

cd $PWD/$1

touch css/style.css js/script.js

touch index.html

echo "<!DOCTYPE html>\n
<html lang=\"ko\">\n
<head>
    <meta charset="UTF-8">
    <link rel=\"shortcut icon\" href=\"/favicon.ico\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"stylesheet\" href=\"css/style.css\">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <title>Web Study | By Henry</title>
</head>
<body>
  
</body>
</html>

<script src=\"js/script.js\" type=\"module\"></script>" | tee index.html > '/dev/null'