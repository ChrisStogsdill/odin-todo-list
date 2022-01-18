import './style.css'

let testArray = [1,2,'test']
let testObject = {test1: 'test-data'}
localStorage.setItem('test1', 'test1-data')
localStorage.setItem("test2", "test2-data")
localStorage.setItem("test3", testObject)

let testrecall = localStorage.getItem('test3')
console.table(testrecall)
