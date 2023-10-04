let x = document.getElementById('save');
let save = document.getElementById('save2');
x.addEventListener('click', ()=>{
    let y = document.getElementById('c').value;
    let hi = document.getElementById('hi').innerHTML= `You added ${y} on your list.`;
    if(hi == ""){
        document.getElementById('hi').innerHTML= y;
    }else{
        var newl = document.getElementById('result');
        var di = document.createElement('div'); //childElement of <div> element with the idName 'result'
        var elem = document.createElement('p'); //element for text
        var sp = document.createElement('p'); //Element for Date
        var tex = document.createTextNode(y); //created textNode 
        var box = document.createElement('input'); //created input element
        box.type = 'checkbox'; // set type of input element

        var dat = new Date(); //date
        var dat0 = dat.getDay(); //get year
        var dat1 = dat.getHours();
        var dat2 = dat.getMinutes();
        var dat4 = dat.getSeconds();
        let dat3;
        if (dat0 == '1'){
            dat3 = 'sun'
        }else if(dat0 == '2'){
            dat3= 'mon'
        }else if(dat0 == '3'){
            dat3= 'tue'
        }else if(dat0 == '4'){
            dat3= 'wed'
        }else if(dat0 == '5'){
            dat3= 'thu'
        }else if(dat0 == '6'){
            dat3= 'fri'
        }else{
            dat3= 'sat'
        }
        
        di.appendChild(elem) //add new created <p> element here
        elem.appendChild(tex) //create text node here
        sp.append(dat3, ' ' , '0',dat1, ':', dat2, ':', dat4) // insert date to new created <p> element
        di.appendChild(sp)
        di.appendChild(box) // add checkbox here
        newl.appendChild(di) //add new created <div> to parentElement with the idName 'result'
        di.classList.add('check1')
        document.getElementById('c').value = ""; 
    }
});