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
    throw new Error (`Error happened: ${response}`)
  }

  return responseBody;
  }