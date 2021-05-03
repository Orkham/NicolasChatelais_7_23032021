
let crossArray = document.getElementsByClassName('cancelCross');

export class CancelCross {
    static createCancelCross(){
        let cross = document.createElement("i");
        cross.className = "far fa-times-circle pl-2 cancelCross";
        return cross;
    }
}