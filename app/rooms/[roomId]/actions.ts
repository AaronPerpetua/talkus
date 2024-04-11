"use server"
import { StreamChat } from "stream-chat";


import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const { getAccessToken} = getKindeServerSession();


export async function generateTokenAction(){

    const session = await getAccessToken();
    

    const api_key = "3eem967jfv8f";
    const api_secret = "qshwcap5anmxn8rptnd2nsakwpryspk723jdvqh9hxzne237apbha8kqyd6yndc9";
    const serverClient = StreamChat.getInstance(api_key, api_secret);

   
    const token = serverClient.createToken(JSON.stringify(session?.azp, null, 2));
 
return token;

}