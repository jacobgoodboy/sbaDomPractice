const contacts=[{
    firstname:'nane',
    lastname:'mane',
    phonenumber:'312459998'
    
}]
const fname=document.getElementById('fname')
const lname=document.getElementById('lname')

fname.addEventListener('change', function (){
    console.log(' input logging fname')
    console.log(fname.value)
})

lname.addEventListener('change', function (){
    console.log(' input logging fname')
    console.log(lname.value)
})

