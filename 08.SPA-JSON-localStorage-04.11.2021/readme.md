# JSON

## JavaScript Object Notation:
JSON is a Data representation format commonly used for Server/Client communication, as well as to store data in **.json** files e.g. configuration files.
It is lightweight because it is only string and it is easy to read/write because it looks just like Javascript objects. JSON is supported by all main programming languages.

## JSON methods:
The JSON built-in object in Javascript has the following methods:

>### JSON.stringify()
As the name implies this method converts JS code into JSON string.

>### JSON.parse()
This method converts JSON string into Javascript valid code.



---
---

# localStorage

localStorage is a small key/value database that is a part of the browser, it has the maximum size of 10mb.
We can use it to store string data mostly in the JSON format, so we can get that data later when needed.

## localStorage methods:

### localStorage.setItem()
We can store a key/value pair in localStorage using setItem() method, which expects 2 string arguments, first the key then the value:
`localStorage.setItem('myTodos', myJsonData);`

### localStorage.setItem()
We can get data from localStorage using getItem() method, which expects 1 string argument, the key:
`localStorage.getItem('myTodos');`

### localStorage.removeItem()
We can delete an item from localStorage using removeItem() method, which expects 1 string argument, the key:
`localStorage.removeItem('myTodos');`

### localStorage.clear()
We can delete all items from localStorage using clear() method:
`localStorage.clear();`
