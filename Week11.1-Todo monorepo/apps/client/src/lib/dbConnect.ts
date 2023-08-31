import mongoose from "mongoose";
let alreadyDone= false;

export async function ensureDbConnected(){
    if(alreadyDone){
        return;
    }
    alreadyDone= true;
    await mongoose.connect('mongodb+srv://vipulwasnik0:Vipul123@cluster0.4foqutn.mongodb.net/');
}