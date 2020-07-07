package main

import (
	"text/template"
	"io/ioutil"
	"os"
)

func main() {
	tmpl, err := template.ParseFiles("index.gohtml")
	var talks []string
	files, err := ioutil.ReadDir("./")
	if err != nil { panic(err) }
	for _, f := range files {
		if (f.IsDir()) {
			if _, err := os.Stat("./" + f.Name() + "/index.html"); err == nil {
				talks = append(talks, f.Name())
			}
		}
	}
	outFile, err := os.OpenFile("index.html", os.O_RDWR|os.O_CREATE, 0644)
	if err != nil { panic(err) }
	defer outFile.Close()
	
	err = tmpl.Execute(outFile, talks)
	if err != nil { panic(err) }
}

