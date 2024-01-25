export async function webhook(asset_listed:string){
    const send_object = {
        name: "Captain Hook",
        content: asset_listed
    };
    
    
    const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
        body: JSON.stringify(send_object)
	};
    try {
        let urlhook = 'https://discord.com/api/webhooks/1199815432832561202/Zchj1tTHPXPtVHZjCc92F6m30qY-9K5QXQtKe9WmQ5i6b_fP4Q19BCx7x3HUwR0r1_UB'
        const responde = fetch(urlhook, options)
        .then((r) => r)
        .then((r)=> (r)
        )

    } catch (error) {
        console.log(error);
        
        
    }
}