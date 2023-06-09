let mi_array = [{ id:1, name: 'Angel'}, {id:2, name: 'Checo'}, {id:3, name: 'Roberto' }];

let newArray = mi_array.map(item => ({...item, status: true}))

console.log(newArray)

let num = 4;
let impThing = '';
let cont = 0;

let impNumero = (num) => {
    cont++;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if(cont < num){
                impThing += ' '
            }
            else{
                impThing += '#'
            }
            
        }        
        console.log(impThing);
        impThing ='';
    }
}

impNumero(num)