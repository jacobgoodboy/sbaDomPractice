const contacts=[{
    firstname:'john',
    lastname:'doe',
    phonenumber:'3124599999'
    
}]

//declaring the buttons

const fname=document.getElementById('fname')
const lname=document.getElementById('lname')
const addbtn=document.getElementById('addbtn')
const searchbtn=document.getElementById('searchbtn')

//declaring some listeners
fname.addEventListener('change', function (){
    console.log(' input logging fname')
    console.log(fname.value)
})

lname.addEventListener('change', function (){
    console.log(' input logging fname')
    console.log(lname.value)
})

addbtn.addEventListener('click', function(){
if(lname.value&&fname.value){
    console.log('not empty')
}else{
    alert('Please enter first and Last name!')
}

})

searchbtn.addEventListener('click', function(){

})


