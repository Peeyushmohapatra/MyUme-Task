export async function getPosts(dispatch){
    const api = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await api.json()
    
    dispatch({
        type:"posts",
        payload:response
    })
    // console.log(response);
}


export function searchPost(input,arr,dispatch){
    
    const ans = (arr.filter((item) => {
        if((item.body.toUpperCase()).includes(input.toUpperCase())){
            return item
        }
    }));
    
    dispatch({
        type:"search-data",
        payload:ans
    })
}