const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let kintamasis = rand(1, 6);
//--------------------------1

document.querySelector('button.paspausk').addEventListener('click', function(){
        document.querySelector('h2.demo').innerText = rand(1, 6);
        let x =document.querySelector('h2.demo');
        document.querySelector('h2.demo1').innerText = rand(1, 6);
        let y = document.querySelector('h2.demo1');
        if(typeOf(document.querySelector('h2')) == 'number'){
            document.querySelector('button.paspausk').addEventListener('click', function(){
                document.querySelector('h2.demo').innerText = rand(1, 6);
                let z = document.querySelector('h2.demo')
                document.querySelector('h2.demo1').innerText = rand(1, 6);
                let a= document.querySelector('h2.demo1')
                    if( x == z && y == a){
                        document.querySelector('h2.demo').style.color = 'red';
                        document.querySelector('h2.demo1').style.color = 'red';

                    }
                    if(x == z ){
                        document.querySelector('h2.demo').style.color = 'red';
                    } 
                    if(y == a ){
                        document.querySelector('h2.demo1').style.color = 'red';
                    }  
                    x = z;
                    y = a; 
                    console.log(x)                 
                    console.log(y)                 
            })

        }

    } )
    //----------------------------2

    let masyvas =[];
    let sum = 0
    document.querySelector('button.generuok').addEventListener('click', function(){
         z = rand(1, 10)
         masyvas.push(z)
         console.log(masyvas)
         sum = sum + z;
        return document.querySelector('h3').innerText = sum;
    })
    //-----------------------------3
 ulTag = document.querySelector('ul')
let li ;
{/*//for(i=0;i<africa.length;i++){
  li.textContent = africa[i]
  a.appendchild(li)

}*/}

africa.forEach(function(a, li){a.appendChild(li)})


   



