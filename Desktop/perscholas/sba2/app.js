const contacts=[{
    firstname:'john',
    lastname:'doe',
    phonenumber:'3124599999'
    
},
{
    firstname:'jane',
    lastname:'smith',
    phonenumber:3124449999
}]

const results=document.querySelector('.results')

//declaring the buttons

const fname=document.getElementById('fname')
const lname=document.getElementById('lname')
const addbtn=document.getElementById('addbtn')
const searchbtn=document.getElementById('searchbtn')
const addfield=document.getElementById('addnumberfield')
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
    const inp=document.createElement('input')

}else{
    alert('Please enter first and Last name!')
}

})

//search btn implementation works
searchbtn.addEventListener('click', function(){

    if(lname.value&&fname.value){
        for(contact of contacts){
            if(fname.value == contact.firstname && lname.value ==contact.lastname){
                results.removeChild(results.firstChild)
                const result=document.createElement('div')
                
                const searchresult=`${fname.value} ${lname.value} ${contact.phonenumber}`
                result.textContent=searchresult
                results.appendChild(result)
                lname.value=''
                fname.value=''
                
            }
            else{
                alert('Contact not found!')
            }
        }
    }else{
        alert('Please enter first and Last name!')
    }

})


