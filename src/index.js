document.addEventListener('DOMContentLoaded',()=>{
    let tomb = [];


    for(let i=0;i<20;i++){
        let aktRan = Math.round(Math.random()*30);

        tomb.push(aktRan)
        
    }

    tomb.forEach( (element) => {
        if(element % 5 == 0 && element>0){
        console.log(element)
        }
    });

    document.getElementById("btn").addEventListener('click', () =>{
        tomb.forEach( (element) => {
            if(element % 5 == 0 && element>0){
            console.log(element)
            }
        });
    })
    
    document.getElementById("plus").addEventListener('click', () =>{
       let ertek =  document.getElementById("szam").value;
       tomb.push(ertek);
       console.log(ertek);
       
    })


    class Szazlabu{
        labakszama =0;

        constructor(labszam){
            this.labakszama = labszam;
        }

        static toString(szam) {
            return console.log(`${szam} lábú százlábú`)
            
        }

        static labakbolSzazlabuk(t = [1,26,53]){

                let obj = {
                    labak : 0,
                }

                t.forEach((element)=>{
                    obj.push(element);
                })


        }

        static szazlabuMegjelenites(){

        }

    }

    Szazlabu.toString(100);
    
})