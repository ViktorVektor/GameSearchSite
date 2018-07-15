
//var text = fs.readFileSync("./gameList.txt").toString('utf-8');
//var text =  fs.readFileSync(`${process.cwd()}/relative-path-to/gameText.txt`).toString()
fetch('gameList.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })

function showResult()
{	
	result = text/*Hello World!"*/;
	document.getElementById('result').innerHTML = "<p>" + result + "</p>";
}