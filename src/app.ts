import { getEpochTimestamp } from "./utils/epoch";
import { webhook } from "./utils/webhook";

const ethoriginslug = 'rtlol'
const avaxslug = 'rtlol-evolved-avax'
const ethslug = 'rtlol-evolved-eth'

async function get_listings(ocurredAfter: number, slug: string) {
	const options = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'X-API-KEY': ""
		}
	};
		try {
			let url = `https://api.opensea.io/api/v1/events?collection_slug=${slug}&event_type=created&occurred_after=${ocurredAfter}`
			const response = await fetch(url, options)
			.then((r) => r.json())
			.then((r) => response_handler(r.asset_events, slug))
			
        } catch(e){
            console.log(e);
        }}


function response_handler(array_input:Array<any>, slug: string){
	
	if (array_input.length == 0){
		console.log("nada encontrado em" + slug);
		return
	}
	array_input.map((x) => {
		const asset: string = x.asset.name;
		webhook(`NFT ${x.asset.name} on ${slug}`)
	console.log(x.asset.name);
	})
}

async function monitor(){
	setInterval(async() =>{
		const timestamp = getEpochTimestamp() - 1 * 60 * 1000;
		await get_listings(timestamp,ethoriginslug);
		await get_listings(timestamp, ethslug)
		await get_listings(timestamp, avaxslug)
	}, 5000)
}
monitor();
