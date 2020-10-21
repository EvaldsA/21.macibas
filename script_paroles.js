const vardi1 = ['Jana','Janis','Peteris','Liga', 'Maija'];
const vardi2 = ['skrien','lec','lien','lepojas', 'slinko'];
const vardi3 = ['laukos','majas','centra','veikala', 'darba'];

let izveletieVardi = 3;

let rindas = document.querySelector('.rindas');
//rindas.innerHTML = 'hello';



function randFunc(maxCipars)
{
  let random1 = Math.floor( Math.random() * maxCipars );
  return random1;
}

function izlozet()
{
    rindas.innerHTML = '';
    
    for(let i=0; i < izveletieVardi; i++) 
    {
        let rand = randFunc(vardi1.length, vardi2.length, vardi3.length);

        let uzvaretajs = vardi1[rand]+vardi2[rand]+vardi3[rand];

        rindas.innerHTML += `
        <tr>
        <td>${i+1}</td>
        <td>${uzvaretajs}</td>
        </tr>
        `;
    }
}//beidzas izlozet()




console.log(vardi1+vardi2+vardi3)