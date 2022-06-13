let con = 0
document.querySelector('#btn').addEventListener('click',function(){
    let inp = document.querySelector('#input').value
    let html = `<div class="text"><span class="actualtext" value=${con}>${inp}</span> <span class="edit">Edit</span><span class="del">Del</span></div>`
    document.querySelector('#container').insertAdjacentHTML('beforeend',html)
    let del = document.querySelectorAll('.del')
    let edi = document.querySelectorAll('.edit')

    for(let x of del){
        x.addEventListener('click',function(){
           this.parentElement.remove();
        })
    }
    for(let y of edi){
        y.addEventListener('click',function(){
              document.querySelector('#edi').style.display = 'block';
              document.querySelector('#editin').value = this.textContent
             let attri = this.previousElementSibling.getAttribute('value')
              document.querySelector('#btnedit').addEventListener('click',function(){
                  let len =document.querySelectorAll('.actualtext').length;
                  for(let i=0;i<len;i++){
                      if(attri == document.querySelectorAll('.actualtext')[i].getAttribute('value')){
                          console.log(attri)
                        document.querySelectorAll('.actualtext')[i].textContent = document.querySelector('#editin').value
                        document.querySelector('#edi').style.display = 'none';
                        attri = null;
                      }
                  }
              })
        })
    }
    con++;
})




