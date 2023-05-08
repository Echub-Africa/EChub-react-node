import {Notyf} from 'notyf';


const notyf = new Notyf()


export class Util{
    Alert(status, msg){
        if(status === "error"){
            return notyf.error({
                message: msg,
                dismissible: true,
                icon: true
            })
        } else {
            return notyf.success({
                message: msg,
                dismissible: true,
                icon: true
            })
        }
    }
}