export default class Image{
    constructor(a,b){
        this.state = {
            link: a,
            tag: b,
            
        };
        this.getT= this.getT.bind(this)
        this.getL= this.getL.bind(this)
    }
    

    getL(){
        return this.state.link;
    }
    getT(){
        return this.state.tag;
    }
}
