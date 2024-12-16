const contacts = [{
    firstname: 'john',
    lastname: 'doe',
    phonenumber: '3124599999'

},
{
    firstname: 'jane',
    lastname: 'smith',
    phonenumber: 3124449999
}]

const results = document.querySelector('.results')

//declaring the buttons

const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const addbtn = document.getElementById('addbtn')
const searchbtn = document.getElementById('searchbtn')
const addfield = document.getElementById('addnumberfield')
//declaring some listeners
// fname.addEventListener('change', function (){
//     console.log(' input logging fname')
//     console.log(fname.value)
// })

// lname.addEventListener('change', function (){
//     console.log(' input logging fname')
//     console.log(lname.value)
// })


//add button implementation

addbtn.addEventListener('click', function () {
    if (lname.value && fname.value) {
        //added the input
        const inp = document.createElement('input')
        inp.placeholder = 'Enter the phone number:'
        inp.type = 'tel'
        addfield.appendChild(inp)
        //added confirm button
        const confirm = document.createElement('button')
        confirm.textContent = 'confirm'
        addfield.append(confirm)
        //confirm button
        confirm.addEventListener('click', function () {
            const newcontact = {
                firstname: fname.value,
                lastname: lname.value,
                phonenumber: inp.value
            }
            contacts.push(newcontact)
            fname.value = ''
            lname.value = ''
            addfield.innerHTML = ''
        })


    } else {
        alert('Please enter first and Last name!')
    }

})


//search btn implementation works
searchbtn.addEventListener('click', function () {

    if (lname.value && fname.value) {
        let contactFound = false;
        for (contact of contacts) {
            if (fname.value.toLowerCase() == contact.firstname.toLowerCase() && lname.value.toLowerCase() == contact.lastname.toLowerCase()) {
                if (results.firstChild) {
                    results.removeChild(results.firstChild);
                }
                const result = document.createElement('div')

                const searchresult = `${fname.value} ${lname.value} ${contact.phonenumber}`
                result.textContent = searchresult
                results.appendChild(result)
                lname.value = ''
                fname.value = ''
                contactFound = true;
                break
            }

        }
        if (!contactFound) {
            alert('Contact not found!');
        }
    }else {
        alert('Please enter first and Last name!')
    }

})


