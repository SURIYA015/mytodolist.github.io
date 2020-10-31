window.onload=()=>{
    let form1=document.querySelector("#addform");
    let items=document.querySelector('#items');
    let submit=document.querySelector('#submit');
    form1.addEventListener('submit',additem);
    items.addEventListener('click',removeitem);
}
function additem(e){
    e.preventDefault();
    if(submit.value!='submit'){
        edititem.target.parentNode.childNodes[0].data=document.querySelector('#item').value;
        submit.value='submit';
        document.querySelector('#item').value='';
    }
    let newitem=document.querySelector('#item').value;
    if(newitem.trim() == '' || newitem.trim() == null){
        return false;
    }
    else{
        document.querySelector("#item").value='';
    }
    let li=document.createElement('li');
    li.className='list-group-item';
    let deletebutton=document.createElement('button');
    deletebutton.className='btn-danger btn-sm float-right m-2 delete';
    deletebutton.appendChild(document.createTextNode('Delete'));
    let editbutton=document.createElement('button');
    editbutton.className='btn-primary btn-sm float-right m-2 edit';
    editbutton.appendChild(document.createTextNode('Edit'));
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(deletebutton);
    li.appendChild(editbutton);
    items.appendChild(li);

}
function removeitem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm("Are you Sure")){
            let li=e.target.parentNode;
            items.removeChild(li);
            document.querySelector('#lblsuccess').innerHTML="Task Deleted Successfully";
            document.querySelector('#lblsuccess').style.display='block';
            setTimeout(function(){
                document.querySelector('#lblsuccess').style.display='none';
            },3000);
        }
    }
    if(e.target.classList.contains('edit')){
        document.querySelector('#item').value=e.target.parentNode.childNodes[0].data;
        submit.value='edit';
        edititem=e;
    }

}
function togglebutton(ref,btnid){
    document.querySelector(`#${btnid}`).disabled=false;
}