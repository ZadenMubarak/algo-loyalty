'reach 0.1';
'use strict';

const Award = {
  Name: Fun(Bytes, Null),
  WalletAddr: Fun(Bytes, Null),
  Message: Fun(Bytes, Null)
}



const Customer = {
  Wallet: Address
}

export const main = Reach.App(()=>{
   const Presenter = Participant("Presenter", {
    Present: Fun(Bytes, Null),
    
   })
   init();
   const award = Award;
   Presenter.only(()=> 
   {
    declassify(interact.displayResult(Award));
    const reward = declassify(interact.reward);
    Presenter.publish(reward)
    .pay(reward);
    transfer(amt, Token).to(Customer)
  })
  exit();
})