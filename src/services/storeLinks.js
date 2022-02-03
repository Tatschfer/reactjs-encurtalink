//Buscar os links salvos:

export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

//Salvar um link no local storage:

export async function saveLink(key, newlink){
    let linksStored = await getLinksSave(key);

    //Se já tiver um link salvo com algum ID igual, não duplica
    const hasLink = linksStored.some(link => link.id === newlink.id)

    if(hasLink){
        console.log("Esse link já existe na sua lista")
        return;
    }

    //Se não tiver, adicionar:
    linksStored.push(newlink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo')
}

//Deletar um link

export function deleteLink(links,id){

    let myLinks = links.filter(item =>{
        return(item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log('Link deletado com sucesso!')

    return myLinks;
}