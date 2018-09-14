const canvas=document.getElementById("canvas");
const c=canvas.getContext('2d');

let img= new Image();
let fileName='';
const downloadImg = document.getElementById("download");
const uploadFile = document.getElementById("upload");
const remove = document.getElementById("remove");

document.addEventListener('click',(e) =>{
    if(e.target.classList.contains('filter-btn'))
    {
        if(e.target.classList.contains('brightness-add'))
        {
            //console.log(123);
            Caman('#canvas',img,function(){
                this.brightness(5).render();
            });
        }
        else if(e.target.classList.contains('brightness-remove'))
        {
            
            Caman('#canvas',img,function(){
                this.brightness(-5).render();
            });
        }
        else if(e.target.classList.contains('contrast-add'))
        {
            
            Caman('#canvas',img,function(){
                this.contrast(5).render();
            });
        }
        else if(e.target.classList.contains('contrast-remove'))
        {
            
            Caman('#canvas',img,function(){
                this.contrast(-5).render();
            });
        }
        else if(e.target.classList.contains('saturation-add'))
        {
            
            Caman('#canvas',img,function(){
                this.saturation(5).render();
            });
        }
        else if(e.target.classList.contains('saturation-remove'))
        {
            
            Caman('#canvas',img,function(){
                this.saturation(-5).render();
            });
        }
        else if(e.target.classList.contains('vibrance-add'))
        {
            
            Caman('#canvas',img,function(){
                this.vibrance(5).render();
            });
        }
        else if(e.target.classList.contains('vibrance-remove'))
        {
            
            Caman('#canvas',img,function(){
                this.vibrance(-5).render();
            });
        }
        else if(e.target.classList.contains('crossprocess-add'))
        {
            
            Caman('#canvas',img,function(){
                this.crossProcess().render();
            });
        }
        else if(e.target.classList.contains('pinhole-add btn'))
        {
            
            Caman('#canvas',img,function(){
                this.pinhole().render();
            });
        }
        else if(e.target.classList.contains('nostalgia-add'))
        {
            
            Caman('#canvas',img,function(){
                this.nostalgia().render();
            });
        }
        else if(e.target.classList.contains('hermajesty-add'))
        {
            
            Caman('#canvas',img,function(){
                this.herMajesty().render();
            });
        }
        else if(e.target.classList.contains('vintage-add'))
        {
            
            Caman('#canvas',img,function(){
                this.vintage().render();
            });
        }
        else if(e.target.classList.contains('lomo-add'))
        {
            
            Caman('#canvas',img,function(){
                this.lomo().render();
            });
        }
        else if(e.target.classList.contains('clarity-add'))
        {
            
            Caman('#canvas',img,function(){
                this.clarity().render();
            });
        }
        else if(e.target.classList.contains('sincity-add'))
        {
            
            Caman('#canvas',img,function(){
                this.sinCity().render();
            });
        }
    }
});

remove.addEventListener('click',(e) =>{
Caman('canvas',img,function(){
    this.revert();
})
});

uploadFile.addEventListener('change',(e) =>{
    const file = document.getElementById('upload').files[0];
    const reader = new FileReader();
    if(file)
    {
        fileName = file.name;
        reader.readAsDataURL(file);
    }
reader.addEventListener('load',() => {
    img=new Image();
    img.src = reader.result;
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        c.drawImage(img,0,0,img.width,img.height);
        canvas.removeAttribute('data-caman-id');
        
    }
},false);
});

downloadImg.addEventListener('click',(e) =>{
    const fileExt = fileName.slice(-4);
    let newFile;
    if(fileExt ==='.jpg'||fileExt ==='.png'||fileExt ==='.gif')
    {
        newFile = fileName.substring(0,fileName.length-4) + 'edited.jpg';
    }
    download(canvas,newFile);
});
function download(canvas,filename)
{
    let e;
    const link=document.createElement('a');

    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg',0.8);
    e=new MouseEvent('click');
    link.dispatchEvent(e);
}

