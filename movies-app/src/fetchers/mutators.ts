export async function mutator(url: string, { arg }: { arg: any}) {
   const response =  await fetch(url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(arg)
  });

  const responseBody = await response.json();
  if(!response.ok){
    throw new Error (responseBody.errors);
  }

  return responseBody;
  }


  export async function loginMutator(url: string, { arg }: { arg: any}) {
    const response =  await fetch(url, {
     method: 'POST',
     headers: {
         "Content-Type": "application/json"
     },
     body: JSON.stringify(arg)
   });
 
   const responseBody = await response.json();
   if(!response.ok){
      throw new Error (responseBody.errors);
   }
       const accessToken = response.headers.get("access-token");
      const client = response.headers.get("client");
      const tokenType = response.headers.get("token-type");
      const uid = response.headers.get("uid");

    const authData = {
    "access-token": accessToken,
    client,
    "token-type": tokenType,
    uid
    }

    localStorage.setItem("auth", JSON.stringify(authData));
 
   return responseBody;
   }