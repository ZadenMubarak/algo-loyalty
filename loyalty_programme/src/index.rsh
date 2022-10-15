'reach 0.1';


export const main = Reach.App(
    {},
     [Participant('Alice',
      { request: UInt,info: Bytes(128) }

      ),

       Participant('Bob', 
       { want: Fun([UInt], 
       Null
       ),
            got: Fun([Bytes(128)], Null) })
        ],

      (A, B) => {
         (A.only(() => {
            const request = declassify(interact.request); });
         A.publish(request);|

)