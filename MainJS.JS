const HeloBtn = document.getElementById('HBAdd');
const TruckBtn= document.getElementById('TBAdd');
const boatBtn= document.getElementById('BBAdd');
const BBtn= document.getElementById('BBMoins');
const HBtn= document.getElementById('HBMoins');
const TBtn= document.getElementById('TBMoins');
const PannelDetail = document.getElementById('pannel_detail');
const TitleListe=document.createElement('caption');
const DivPannelInf=document.createElement('Div');
const PannelInfTitle=document.createElement('h2');
const TotalPriceInfTitle=document.createElement('h1');
const LovBtnH=document.getElementById('HHB');
const LovBtnT=document.getElementById('THB');
const LovBtnB=document.getElementById('BHB');
var ArticleListeTable = document.createElement('table');
var ligne= document.createElement('tr');
var article = document.createElement('td');
var price = document.createElement('td');
var qnt = document.createElement('td');
var prices = document.createElement('td');
var BtnRem = document.createElement('button');
var x=0,y=0,z=0,tbl=0,QntA=0,idx=0,tt=0,tpp=0;
var test=false;
var TypA='';
var PriA=0;

HeloBtn.addEventListener('click',()=>{
      tbl=ArticleListeTable.rows.length;
      x=parseInt(document.getElementById('HQ').value);
      x+=1;
      document.getElementById('HQ').value=x;  
      TypA='Helo';
      PriA=30;
      if (tbl==0)
            {
                  CreateArticleListe();
                  AddLigne(x);

            }
      else
            {
                  articleExist();
                  if(test==true)
                  {
                        ArticleListeTable.rows[idx].cells[2].innerText=x;
                        ArticleListeTable.rows[idx].cells[3].innerText=x*PriA; 
                  }
                  else
                  {
                        AddLigne(x);
                  }                    
            }
            PannelTotalPrice();
})
TruckBtn.addEventListener('click',()=>{
      tbl=ArticleListeTable.rows.length;
      y=parseInt(document.getElementById('TQ').value);
      y+=1;
      document.getElementById('TQ').value=y;  
      TypA='Truck';
      PriA=25;
      if (tbl==0)
            {
                  CreateArticleListe();
                  AddLigne(y);
            }
      else
            {
                  articleExist();
                  if(test==true)
                  {
                        ArticleListeTable.rows[idx].cells[2].innerText=y;
                        ArticleListeTable.rows[idx].cells[3].innerText=y*PriA;
                  }
                  else
                  {
                        AddLigne(y);
                  }                    
            }
            PannelTotalPrice();
})
boatBtn.addEventListener('click',()=>{
      tbl=ArticleListeTable.rows.length;
      z=parseInt(document.getElementById('BQ').value);
      z+=1;
      document.getElementById('BQ').value=z;  
      TypA='Boat';
      PriA=20;
      if (tbl==0)
            {
                  CreateArticleListe();
                  AddLigne(z);
            }
      else
            {
                  articleExist();
                  if(test==true)
                  {
                        ArticleListeTable.rows[idx].cells[2].innerText=z;
                        ArticleListeTable.rows[idx].cells[3].innerText=z*PriA;

                  }
                  else
                  {
                        AddLigne(z);
                  }                    
            }
            PannelTotalPrice();
})
function CreateArticleListe(){
      ArticleListeTable.appendChild(ligne); 
      ArticleListeTable.appendChild(TitleListe);
      TitleListe.setAttribute('classe','Title_Liste');
      TitleListe.innerText='There is 1 toy in pannel';
      ArticleListeTable.setAttribute('class','tbl'); 
      const HA=document.createElement('th');
      const HP=document.createElement('th');
      const HQ=document.createElement('th');
      const HTP=document.createElement('th');
      const RemItem = document.createElement('th');
      ligne.appendChild(HA);      
      ligne.appendChild(HP);      
      ligne.appendChild(HQ);      
      ligne.appendChild(HTP);
      ligne.appendChild(RemItem);
      HA.appendChild(document.createTextNode('Article'));
      HP.appendChild(document.createTextNode('Price Unit'));
      HQ.appendChild(document.createTextNode('Quantity'));
      HTP.appendChild(document.createTextNode('Total Article Price'));
      RemItem.appendChild(document.createTextNode('Other Action'));
      PannelDetail.appendChild(ArticleListeTable);
      PannelInfTitle.innerText='Total Toys Price';
      DivPannelInf.appendChild(PannelInfTitle);
      DivPannelInf.appendChild(TotalPriceInfTitle);
      DivPannelInf.setAttribute('classe','Title_Liste');
      PannelDetail.appendChild(DivPannelInf);
}
function AddLigne(q){
      tbl=ArticleListeTable.rows.length;
      var BtnRemField=document.createElement('td');
      ligne=ArticleListeTable.insertRow(tbl);
      article=ligne.insertCell(0);
      price=ligne.insertCell(1);
      qnt=ligne.insertCell(2);
      prices=ligne.insertCell(3);
      article.innerText=TypA;
      price.innerText=PriA;
      qnt.innerText=q;
      prices.innerText=PriA*q;
}
function articleExist(){
      tbl=ArticleListeTable.rows.length;
      if(tbl==1){
            test=false;
            return;
      }
      let i =1;
      while(i<tbl){
            if(ArticleListeTable.rows[i].cells[0].innerText == TypA){
                  test=true;
                  idx=i;
                  break;
            }
            else
            {
                  test=false;
            }
      i=i+1;
      }
      return test;
}
function PannelTotalPrice(){
      tpp=0;
      tt=0;
      var ti=ArticleListeTable.rows.length;
      for(let i=1;i<ti;i++) {
            tpp+=parseInt(ArticleListeTable.rows[i].cells[3].innerText);
            tt+=parseInt(ArticleListeTable.rows[i].cells[2].innerText);
      }
TitleListe.innerText='There is ' + tt + ' toy in pannel';
TotalPriceInfTitle.innerText= tpp +' €';
}
function MoinsArticle(){
      articleExist();
      if(test==true){
            var q =parseInt(ArticleListeTable.rows[idx].cells[2].innerText);
            q=q-1;
            ArticleListeTable.rows[idx].cells[2].innerText=q;
            ArticleListeTable.rows[idx].cells[3].innerText=q*PriA;
            PannelTotalPrice();
      }

}
BBtn.addEventListener('click',()=>{
      var q= parseFloat(document.getElementById('BQ').value);
      TypA='Boat';
      PriA=20;
      if (q>1){
            MoinsArticle();
            document.getElementById('BQ').value= ArticleListeTable.rows[idx].cells[2].innerText; 
      }else{
            MoinsArticle();
            ArticleListeTable.deleteRow(idx);
            document.getElementById('BQ').value=0;
      }

})
TBtn.addEventListener('click',()=>{
      var q= parseFloat(document.getElementById('TQ').value);
      TypA='Truck';
      PriA=25;
      if (q>1){
            MoinsArticle();
            document.getElementById('TQ').value= ArticleListeTable.rows[idx].cells[2].innerText;
      }else{
            MoinsArticle();
            ArticleListeTable.deleteRow(idx);
            document.getElementById('TQ').value=0;
      }

})
HBtn.addEventListener('click',()=>{
      var q= parseFloat(document.getElementById('HQ').value);
      TypA='Helo';
      PriA=30;
      if (q>1){
            MoinsArticle();
            document.getElementById('HQ').value= ArticleListeTable.rows[idx].cells[2].innerText; 
      }else{
            MoinsArticle();
            ArticleListeTable.deleteRow(idx);
            document.getElementById('HQ').value=0;
      }

})
const HQIn=document.getElementById('HQ');
HQIn.addEventListener('input',()=>{
      x=parseInt(HQIn.value);
      x-=1;
      HQIn.value=x;
      HeloBtn.click();
      if(x<1){
            HBtn.click();     
      }
      PannelTotalPrice();
})
const TQIn=document.getElementById('TQ');
TQIn.addEventListener('input',()=>{
      x=parseInt(TQIn.value);
      x-=1;
      TQIn.value=x;
      TruckBtn.click();
      if(x<1){
            TBtn.click();     
      }
      PannelTotalPrice();
})
const BQIn=document.getElementById('BQ');
BQIn.addEventListener('input',()=>{
      x=parseInt(BQIn.value);
      x-=1;
      BQIn.value=x;
      boatBtn.click();
      if(x<1){
            BBtn.click();     
      }
      PannelTotalPrice();
})
const BBL=document.getElementById('BL');
LovBtnH.addEventListener('click',()=>{
      if(LovBtnH.classList.contains('heart')){
            LovBtnH.classList.remove('heart');
      }else{
            LovBtnH.classList.add('heart');
      }
      
})
LovBtnB.addEventListener('click',()=>{
      if(LovBtnB.classList.contains('heart')){
            LovBtnB.classList.remove('heart');
      }else{
            LovBtnB.classList.add('heart');
      }
      
})
LovBtnT.addEventListener('click',()=>{
      if(LovBtnT.classList.contains('heart')){
            LovBtnT.classList.remove('heart');
      }else{
            LovBtnT.classList.add('heart');
      }
      
})