const faqs=document.querySelectorAll(".faq");

faqs.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    });
});



const bookmarkHead=document.getElementById("first");
const intelligentHead= document.getElementById("second");
const shareHead= document.getElementById("third");
const intelligentAdd=document.getElementById("book");

intelligentHead.addEventListener(("click"),()=>{
    intelligentAdd.innerHTML=`
            <div class="img-section2">
                   <div class="intelligent-container">
                       <img src="../illustration-features-tab-2.svg">
                   </div>

                   <div class="tablet-container3">
                       <div class="tablet"></div> 
                    </div>

                </div>

                <div class="desc-section2">
                    <h1>Intelligent search</h1>
                    <p>Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.</p>
                    <div class="more-info2">
                     <a href="#">More info</a>
                    </div>
                   
                </div>
    `;
});

shareHead.addEventListener(("click"),()=>
{
    console.log("hi");
    intelligentAdd.innerHTML=`  <div class="img-section3">
    <div class="shareBook-container">
        <img src="../illustration-features-tab-3.svg">
    </div>

    <div class="tablet-container4">
        <div class="tablet"></div> 
     </div>

 </div>

 <div class="desc-section3">
     <h1>Share your bookmarks</h1>
     <p>Easily share your bookmarks and collections with others.Create a shareable link that you can send at the click of a button</p>
     <div class="more-info3">
      <a href="#">More info</a>
     </div>
    
 </div>`;
});

bookmarkHead.addEventListener(("click"),()=>
{
    intelligentAdd.innerHTML=` <div class="img-section1">
    <div class="bookmarkImg-container">
        <img src="../illustration-features-tab-1.svg">
    </div>

    <div class="tablet-container2">
        <div class="tablet"></div> 
     </div>

 </div>

 <div class="desc-section1">
     <h1>Bookmark in one click</h1>
     <p>Organize your bookmarks however you like.
      Our simple drag-and-drop interface gives you complete control
      over how you manage your favourite sites.
      <div class="more-info">
      <a href="#">More info</a>
    </div>
     </p>
 </div>  `;
})




