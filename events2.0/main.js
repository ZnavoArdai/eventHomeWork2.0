
function creatElemnt(varname,elentName,idd){

varname=document.createElement(elentName);
document.body.append(varname);
varname.id=idd;
varname.style.display="block"

};




onload=function personPorg() {
    var fourNamesArray=[];

    creatElemnt("title","h1","titleId");
titleId.innerText="task";


creatElemnt("inputName","input","inputNameId");

inputNameId.placeholder ="enter name";

creatElemnt("inputBirthYear","input","inputBirthYearId");
inputBirthYearId.placeholder ="enter birth year";


creatElemnt("btnOne","button","btnOneId");
btnOneId.innerText="enter";
creatElemnt("btnRefresh","button","btnRefreshId");
        btnRefreshId.innerText="refrsh page";

     
        btnRefreshId.addEventListener('click',refresh=>{
this.window.location.reload(true);
        })

var nowDate=new Date();

var isEighteeen=false;

btnOneId.addEventListener('click',print=>{
    if((nowDate.getFullYear()-inputBirthYearId.value)>18){

        isEighteeen=true;

        creatElemnt("h2title","h2","h2Id");
        h2Id.innerText="welcom :"+inputNameId.value;
        h2Id.style.color="blue";
        h2Id.addEventListener('mouseover',()=>{
            h2Id.style.color="green"   ;
    
        })

    } 
    else{
        creatElemnt("h2title","h2","h2Id");
        h2Id.innerText="no entery";
        h2Id.style.color="red"
        creatElemnt("imgOne","img","imgOneId");
        imgOneId.src="https://c.tenor.com/FKn-8Ac5M7oAAAAC/no-bugs-bunny.gif"
        imgOneId.style.height="200px"
        h2Id.addEventListener('mouseover',()=>{
            h2Id.style.color="green"   ;
    
        })
        
    }
if(isEighteeen){

    creatElemnt("lastName","input","lastNameId");
    lastNameId.placeholder="enter last naame";

    creatElemnt("fourNames","input","fourNamesId");
    fourNamesId.placeholder="enter four names";
    
    
    creatElemnt("fourNamesBtn","button","fourNamesBtnId");
    fourNamesBtnId.innerText="save name";

    creatElemnt("ulList","ul","ulListId");


    fourNamesBtnId.addEventListener('click',saveName=>{
        

            fourNamesArray.push(fourNamesId.value);
            if(fourNamesArray.length==4){

                for (let i = 0; i < fourNamesArray.length; i++) {
                    ulListId.innerHTML+="<li id='list"+[i]+"'>"+fourNamesArray[i]+" "+lastNameId.value+"</li>";
                  
                    
                  }  
            }


            
    })


}
    
    
})


}
