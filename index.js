function jQuery(selector){ //'div'
    this.nodes=document.querySelectorAll(selector);
    this.length=this.nodes.length;
}

jQuery.prototype.each=function(callback){
    for(let i=0; i<this.length;i++){
        callback.call(this,this.nodes[i],i);
    }
    return this;
}

jQuery.prototype.show=function(){
    return toggle.call(this, this.nodes,true);
}

jQuery.prototype.hide=function(){
    return toggle.call(this,this.nodes);
}

function toggle(element,flag){
    for(let i=0;i<element.length;i++){
        let item=element[i];
        // let  display=item.style.display;
        if(flag){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    }
    return this;
}

function $(selector){
    return new jQuery(selector);
}

export default $;